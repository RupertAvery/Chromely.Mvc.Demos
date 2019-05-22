import { Component, OnInit, Output, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { IInfo } from '../services/info';
import { IMovie } from '../services/movie';
import { HttpService } from '../services/http.service';
import { RegisteredJsObjectService } from '../services/registered-js-object.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Output() info: IInfo;

  @Output() movies: IMovie[];
  @Output() extenalMovies: IMovie[];
  @Output() postResult: string;

  @Output() httpMovies: IMovie[];
  @Output() httpExternalMovies: IMovie[];
  @Output() httpPostResult: string;

  postData: any;

  constructor(private _registeredJsObjectService: RegisteredJsObjectService,
    private _httpService: HttpService,
    private _zone: NgZone,
    private _location: Location) {

    this.info = <IInfo>{};

    // Initialize info
    this.info.Objective = 'Chromely Main Objectives';
    this.info.Platform = 'Platforms';
    this.info.Version = 'Version';
  }

  /*
  * Navigate back to home page
  */
  goBack(): void {
    this._location.back();
  }

  getInfo() {
    this._registeredJsObjectService.get<IInfo>('/info', null).subscribe(data => {
      this._zone.run(
        () => {
          this.info = data;
        })
    });
  }

  getMovies() {
    this._registeredJsObjectService.get<IMovie[]>('/demo/getmovies', null).subscribe(data => {
      this._zone.run(
        () => {
          this.movies = data;
        })
    });
  }


  saveMovies() {
    this._registeredJsObjectService.post<string>('/demo/savemovies', null, this.postData).subscribe(data => {
      this._zone.run(
        () => {
          this.postResult = data;
        })
    });
  }


  /*
     * Http Requests 
     */
  httpRequest(type: string, url: string): void {
    switch (type) {
      case "getlocal":
        this._httpService.getMovies(url).subscribe(data => {
          this.httpMovies = data;
        });
        break;
      case "getexternal":
        this._httpService.getMovies(url).subscribe(data => {
          this.httpExternalMovies = data;
        });
        break;
      case "post":
        this._httpService.postMovies(url, this.postData)
          .subscribe(result => {
            this.httpPostResult = result['Data'];
          });
        break;
      default:
        console.log('No valid http request found');
    }
  }

  ngOnInit() {
    this.postData = [
      {
        "Id": 1,
        "Title": "The Shawshank Redemption",
        "Year": 1994,
        "Votes": 678790,
        "Rating": 9.2
      },
      {
        "Id": 2,
        "Title": "The Godfather",
        "Year": 1972,
        "votes": 511495,
        "Rating": 9.2
      },
      {
        "Id": 3,
        "Title": "The Godfather: Part II",
        "Year": 1974,
        "Votes": 319352,
        "Rating": 9.0
      },
      {
        "Id": 4,
        "Title": "The Good, the Bad and the Ugly",
        "Year": 1966,
        "Votes": 213030,
        "Rating": 8.9
      },
      {
        "Id": 5,
        "Title": "My Fair Lady",
        "Year": 1964,
        "Votes": 533848,
        "Rating": 8.9
      },
      {
        "Id": 6,
        "Title": "12 Angry Men",
        "Year": 1957,
        "Votes": 164558,
        "Rating": 8.9
      }
    ]


    //this._httpService.getData().subscribe(data => {
    //    this.postData = data;
    //});

    //this._httpService.getInfo('http://chromely.com/info').subscribe(data => {
    //    this.info.objective = data['divObjective'];
    //    this.info.platform = data['divPlatform'];
    //    this.info.version = data['divVersion'];
    //});

    this.getInfo();
  }
}
