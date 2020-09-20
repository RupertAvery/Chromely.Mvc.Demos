import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface CefRequest {
  request: string;
  onSuccess: (response?: any) => void;
  onFailure: (error?: any, msg?: any) => void;
}

declare global {
  interface Window {
    cefQuery(request: CefRequest);
  }
}

@Injectable()
export class ChromelyService {

  get<T>(url: string, parameters: any) {
    var request = {
      "method": "GET",
      "url": url,
      "parameters": parameters,
      "postData": null
    };

    return this.messageRouterQuery<T>(request);
  }

  post<T>(url: string, parameters: any, postData: any) {
    var request = {
      "method": "POST",
      "url": url,
      "parameters": parameters,
      "postData": postData
    };

    return this.messageRouterQuery<T>(request);
  }

  private messageRouterQuery<T>(request): Subject<T> {
    var subject = new Subject<T>();

    // window.cefQuery is injected by Chromely/Cef.
    window.cefQuery({
      request: JSON.stringify(request),
      onSuccess: (response) => {
        var jsonData = JSON.parse(response);
        if (jsonData.ReadyState === 4 && jsonData.Status === 200) {
          subject.next(jsonData.Data);
        } else {
          subject.error(jsonData);
          console.log("Error:" + jsonData);
        }
      },
      onFailure: (err, msg) => {
        subject.error({ err, msg });
        console.log(err, msg);
      }
    });

    return subject;
  }


}
