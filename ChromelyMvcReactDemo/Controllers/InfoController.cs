﻿using Chromely.Mvc;
using Chromely.Mvc.Attributes;
using ChromelyMvcReactDemo.Services;

namespace ChromelyMvcReactDemo.Controllers
{

    public class InfoController : Controller
    {
        private readonly IInfoService _infoService;

        public InfoController(IInfoService infoService)
        {
            _infoService = infoService;
        }

        [HttpGet]
        public Info Index()
        {
            return _infoService.GetInfo();
        }
    }
}