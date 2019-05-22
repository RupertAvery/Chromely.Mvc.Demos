using System.Collections.Generic;

namespace ChromelyAngularCefSharp.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieInfo> GetMovies();
    }
}