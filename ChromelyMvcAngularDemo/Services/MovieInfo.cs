using System;

namespace ChromelyAngularCefSharp.Services
{

    public class MovieInfo
    {
        public MovieInfo()
        {
        }

        public MovieInfo(int id, string title, int year, int votes, double rating, string assembly)
        {
            this.Id = id;
            this.Title = title;
            this.Year = year;
            this.Votes = votes;
            this.Rating = rating;
            this.Date = DateTime.Now;
            this.RestfulAssembly = assembly;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public int Year { get; set; }

        public int Votes { get; set; }

        public double Rating { get; set; }

        public DateTime Date { get; set; }

        public string RestfulAssembly { get; set; }
    }
}