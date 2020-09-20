using Chromely.Mvc;
using ChromelyMvcAngularDemo.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ChromelyMvcAngularDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            MvcAppBuilder
                .Create()
                .UseApp<DemoChromelyApp>()
                .Build()
                .Run(args);
        }
    }

    public class DemoChromelyApp : ChromelyMvcBasicApp
    {
        public override void Configure(IServiceCollection container)
        {
            base.Configure(container);
            container.AddTransient<IInfoService, InfoService>();
            container.AddTransient<IMovieService, MovieService>();
            container.AddControllers();
        }
    }
}
