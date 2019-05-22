using Chromely.Mvc;
using ChromelyAngularCefSharp.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ChromelyAngularCefSharp
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using System.Reflection;
    using Chromely.CefSharp.Winapi;
    using Chromely.CefSharp.Winapi.BrowserWindow;
    using Chromely.Core;
    using Chromely.Core.Host;
    using Chromely.Core.Infrastructure;

    [SuppressMessage("StyleCop.CSharp.MaintainabilityRules", "SA1400:AccessModifierMustBeDeclared", Justification = "Reviewed. Suppression is OK here.")]
    class Program
    {

        static int Main(string[] args)
        {
            try
            {
                HostHelpers.SetupDefaultExceptionHandlers();

                string startUrl = "local://dist/index.html";

                ChromelyConfiguration config = ChromelyConfiguration
                                              .Create()
                                              .WithAppArgs(args)
                                              .WithHostSize(1200, 900)
                                              .WithHostMode(WindowState.Normal, true)
                                              .WithHostTitle("chromely")
                                              .WithHostIconFile("chromely.ico")
                                              .WithStartUrl(startUrl)
                                              .WithLogFile("logs\\chromely.cef_new.log")
                                              .WithLogSeverity(LogSeverity.Info)
                                              .UseDefaultLogger()
                                              .UseDefaultResourceSchemeHandler("local", string.Empty)
                                              .UseDefaultHttpSchemeHandler("http", "chromely.com");

                var services = MvcConfigurationBuilder
                    // Creates a ServiceCollection, nothing special
                    // Since this is an IServiceCollection, you can use existing extensions
                    .Create()
                    // Adds default routing '/{controller}/{action}'
                    .AddChromelyMvcWithDefaultRoutes()
                    // Scans assembly and registers classes that derive from Chromely.Mvc.Controller
                    .UseControllersFromAssembly(Assembly.GetExecutingAssembly())
                    // A fluent way to register services inline, nothing special
                    .RegisterServices((serviceCollection) =>
                    {
                        serviceCollection.AddTransient<IMovieService, MovieService>();
                        serviceCollection.AddTransient<IInfoService, InfoService>();
                    })
                    // default binds to js object "boundControllerAsync", with async = true
                    // see registered-js-object.service.js and implementation of MvcCefSharpBoundObject
                    // in Chromely.Mvc source. CefSharp binds the object and it's methods to a javascript 
                    // object in the embedded Chrome instance, and uses IJavaScriptCallback to return
                    // data back to the browser asynchronously
                    .UseDefaultMvcBoundObject(config);

                using (var window = ChromelyWindow.Create(config))
                {
                    // Register external url schems
                    window.RegisterUrlScheme(new UrlScheme("https://github.com/mattkol/Chromely", true));

                    return window.Run(args);
                }
            }
            catch (Exception exception)
            {
                Log.Error(exception);
            }

            return 0;
        }
    }
}
