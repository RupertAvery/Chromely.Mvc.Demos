using System.Collections.Generic;

namespace ChromelyMvcVueDemo.Services
{
    public class MovieService : IMovieService
    {
        public IEnumerable<MovieInfo> GetMovies()
        {
            string assemblyName = typeof(MovieInfo).Assembly.GetName().Name;

            List<MovieInfo> movieInfos = new List<MovieInfo>();
            movieInfos.Add(new MovieInfo(id: 1, title: "The Shawshank Redemption", year: 1994, votes: 678790, rating: 9.2, assembly: assemblyName));
            movieInfos.Add(new MovieInfo(id: 2, title: "The Godfather", year: 1972, votes: 511495, rating: 9.2, assembly: assemblyName));
            movieInfos.Add(new MovieInfo(id: 3, title: "The Godfather: Part II", year: 1974, votes: 319352, rating: 9.0, assembly: assemblyName));
            movieInfos.Add(new MovieInfo(id: 4, title: "The Good, the Bad and the Ugly", year: 1966, votes: 213030, rating: 8.9, assembly: assemblyName));
            movieInfos.Add(new MovieInfo(id: 5, title: "My Fair Lady", year: 1964, votes: 533848, rating: 8.9, assembly: assemblyName));
            movieInfos.Add(new MovieInfo(id: 6, title: "12 Angry Men", year: 1957, votes: 164558, rating: 8.9, assembly: assemblyName));

            return movieInfos;
        }
    }
}
