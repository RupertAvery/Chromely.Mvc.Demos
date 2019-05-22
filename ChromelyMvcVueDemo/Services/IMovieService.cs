using System.Collections.Generic;

namespace ChromelyVueCefSharp.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieInfo> GetMovies();
    }
}