using System.Collections.Generic;

namespace ChromelyMvcVueDemo.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieInfo> GetMovies();
    }
}