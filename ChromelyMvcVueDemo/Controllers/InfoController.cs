using System.Collections.Generic;
using Chromely.Mvc;
using Chromely.Mvc.Attributes;
using ChromelyVueCefSharp.Services;

namespace ChromelyVueCefSharp.Controllers
{

    public class InfoController : Controller
    {
        private readonly IInfoService infoService;

        public InfoController(IInfoService infoService)
        {
            this.infoService = infoService;
        }

        [HttpGet]
        public Info Index()
        {
            return infoService.GetInfo();
        }
    }
}