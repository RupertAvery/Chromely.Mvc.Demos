﻿using Chromely.Mvc;
using Chromely.Mvc.Attributes;
using ChromelyMvcAngularDemo.Services;

namespace ChromelyMvcAngularDemo.Controllers
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