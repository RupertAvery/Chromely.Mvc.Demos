using System.Collections.Generic;
using System.Linq;
using Chromely.Mvc;
using Chromely.Mvc.Attributes;
using ChromelyMvcAngularDemo.Services;

namespace ChromelyMvcAngularDemo.Controllers
{
    public class DemoController : Controller
    {
        private readonly IMovieService movieService;

        public DemoController(IMovieService movieService)
        {
            this.movieService = movieService;
        }

        [HttpGet]
        public IEnumerable<MovieInfo> GetMovies()
        {
            return movieService.GetMovies();
        }

        [HttpPost]
        public string SaveMovies(IEnumerable<MovieInfo> movies)
        {
            return $"{movies.Count()} rows of data successfully saved.";
        }
    }
}