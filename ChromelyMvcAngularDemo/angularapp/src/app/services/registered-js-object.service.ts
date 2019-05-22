import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare var boundControllerAsync: any;

@Injectable()
export class RegisteredJsObjectService {

  get<T>(url: string, parameters: any) {
    var subject = new Subject<T>();

    boundControllerAsync.getJson(url, parameters, response => {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      if (response.ReadyState === 4 && response.Status === 200) {
        subject.next(response.Data);
      } else {
        subject.error(response);
      }
    });


    return subject;
  }

  post<T>(url: string, parameters: any, postData: any) {
    var subject = new Subject<T>();

    boundControllerAsync.postJson(url, parameters, postData, response => {

      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      if (response.ReadyState === 4 && response.Status === 200) {
        subject.next(response.Data);
      } else {
        subject.error(response);
      }
    });

    return subject;
  }


}
