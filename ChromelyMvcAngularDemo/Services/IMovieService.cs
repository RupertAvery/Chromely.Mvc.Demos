using System.Collections.Generic;

namespace ChromelyMvcAngularDemo.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieInfo> GetMovies();
    }
}