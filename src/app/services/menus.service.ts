import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class MenusService {

  private extractData;
  private API;

  constructor(private http: Http) { }

  getAPI(link: string) {
    this.API = link;
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json;odata=verbose');

    return headers;
  }

  private handleError(error: Response) {
    console.log(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

  getNavItems(): Observable<any[]> {
    const options = new RequestOptions({ headers: this.getHeaders() });

    return this.http
      .get(this.API, options)
      .map((res: Response) => this.extractData = res.json().d.MenuState.Nodes.results)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

}
