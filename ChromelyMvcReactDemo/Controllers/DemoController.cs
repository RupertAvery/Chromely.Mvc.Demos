using System.Collections.Generic;
using System.Linq;
using Chromely.Mvc;
using Chromely.Mvc.Attributes;
using ChromelyMvcReactDemo.Services;

namespace ChromelyMvcReactDemo.Controllers
{
    public class DemoController : Controller
    {
        private readonly IMovieService _movieService;

        public DemoController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public IEnumerable<MovieInfo> GetMovies()
        {
            return _movieService.GetMovies();
        }

        [HttpPost]
        public string SaveMovies(IEnumerable<MovieInfo> movies)
        {
            return $"{movies.Count()} rows of data successfully saved.";
        }
    }
}