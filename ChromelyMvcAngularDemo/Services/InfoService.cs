
namespace ChromelyAngularCefSharp.Services
{
    using System;
    using CefSharp;

    public class InfoService : IInfoService
    {
        public Info GetInfo()
        {
            var bitness = Environment.Is64BitProcess ? "x64" : "x86";
            var chromeVersion = $"Chromium: {Cef.ChromiumVersion}, CEF: {Cef.CefVersion}, CefSharp: {Cef.CefSharpVersion}, Environment: {bitness}";

            return new Info
            {
                Objective = "To build HTML5 desktop apps using embedded Chromium without WinForm or WPF. Uses Windows and Linux native GUI API. It can be extended to use WinForm or WPF. Main form of communication with Chromium rendering process is via Ajax HTTP/XHR requests using custom schemes and domains (CefGlue, CefSharp) and .NET/Javascript integration (CefSharp).",
                Platform = "Cross-platform - Windows, Linux. Built on CefGlue, CefSharp, NET Standard 2.0, .NET Core 2.0, .NET Framework 4.61 and above.",
                Version = chromeVersion
            };
        }
    }
}