using System.Collections.Generic;

namespace ChromelyMvcReactDemo.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieInfo> GetMovies();
    }
}