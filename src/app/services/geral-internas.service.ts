import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GeralInternasService {
  private extractData;
  private extractHeadLine;
  private extractPages;
  private extractGallery;
  private extractBanners;
  private extractNoticias;
  private extractEventos;
  private API;

  constructor(private http: Http) {}

  // Method Get API
  getAPI(link: string) {
    this.API = link;
  }

  // GET Headers
  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Accept', 'application/json;odata=verbose');

    return headers;
  }

  // Method to handle errors
  private handleError(error: Response): Observable<Response> {
    console.log(error);
    const message = `Error status code ${error.status} at ${error.url}`;

    return Observable.throw(message);
  }

  // Method to get RequestOptions
  getRequestOptions(): RequestOptions {
    return new RequestOptions({ headers: this.getHeaders() });
  }

  // Get Sidebar Nav Items
  getNavItems(): Observable<any[]> {
    const options = this.getRequestOptions();

    return (
      this.http
        .get(this.API, options)
        .map(
          (res: Response) =>
            (this.extractData = res.json().d.MenuState.Nodes.results)
        )
        // .do(data => console.log(data))
        .catch(this.handleError)
    );
  }

  // Get Sidebar Nav Heading
  getNavHeadLine(): Observable<any[]> {
    const options = this.getRequestOptions();

    return (
      this.http
        .get(this.API, options)
        .map((res: Response) => (this.extractHeadLine = res.json().d.MenuState))
        // .do(data => console.log(data))
        .catch(this.handleError)
    );
  }

  // Get Page Main Content
  getPageContent(): Observable<any[]> {
    const options = this.getRequestOptions();

    return (
      this.http
        .get(this.API, options)
        .map((res: Response) => (this.extractPages = res.json().d.results))
        // .do(data => console.log(data))
        .catch(this.handleError)
    );
  }

  // Get Page Gallery
  getPageGallery(): Observable<any[]> {
    const options = this.getRequestOptions();
    return (
      this.http
        .get(this.API, options)
        .map((res: Response) => (this.extractGallery = res.json().d)) // Colocar .results em prod
        // .do(data => console.log(data))
        .catch(this.handleError)
    );
  }

  // Get Banner Home
  getBanners(): Observable<any[]> {
    const options = this.getRequestOptions();
    const vm = this;
    return this.http.get(this.API, options).map((res: Response) => {
      let list = this.filterResults(res.json().d.results, 5);
      if (list.length) {
        list = vm.orderBy(list, 'DataPublicacao');
      }
      return (this.extractBanners = list);
    });
  }

  // Get Notícias Home
  getNoticias(): Observable<any[]> {
    const options = this.getRequestOptions();
    const vm = this;
    return this.http.get(this.API, options).map((res: Response) => {
      let list = this.filterResults(res.json().d.results, 3);
      if (list.length) {
        list = vm.orderBy(list, 'DataPublicacao');
      }
      // [];
      // res.json().d.results.forEach((el, index) => {
      //   if (vm.isPublished(el.DataPublicacao, el.DataExpiracao)) {
      //     list.push(el);
      //   }
      // });
      // list = list.slice(0, 3);
      return (this.extractNoticias = list);
    });
  }

  // Get Eventos Home
  getEventos(): Observable<any[]> {
    const options = this.getRequestOptions();
    const vm = this;
    return this.http.get(this.API, options).map((res: Response) => {
      let list = this.filterResults(res.json().d.results, 5);
      if (list.length) {
        list = vm.orderBy(list, 'DataPublicacao');
      }
      return (this.extractEventos = list);
    });
  }

  /**
   * Helper to filter results
   *
   * @param payload  list to iterate
   * @param listLength  length to slice the list
   *
   * @returns list filtered
   */
  filterResults(payload, listLength) {
    let list = [];
    const vm = this;
    payload.forEach((el, index) => {
      if (vm.isPublished(el.DataPublicacao, el.DataExpiracao)) {
        list.push(el);
      }
    });
    list = list.slice(0, listLength);
    return list;
  }
  /**
   * Helper to order by iteratee
   *
   * @param payload  list to order
   * @param iteratee  factor to order by
   *
   * @returns list ordered by
   */
  orderBy(payload: Array<any>, iteratee) {
    const ordered = [];
    let index: Number = Date.parse(payload[0][iteratee]);
    if (payload.length) {
      payload.forEach(el => {
        if (Date.parse(el[iteratee]) > index) {
          ordered.unshift(el);
          index = Date.parse(el[iteratee]);
        } else {
          ordered.push(el);
        }
      });
    }
    return ordered;
  }

  // Helper to verify if the given item is published
  isPublished(publishDate, publishTimeout) {
    // console.log(
    //   Date.now() >= Date.parse(publishDate) &&
    //     Date.now() <= Date.parse(publishTimeout)
    // );
    return (
      Date.now() >= Date.parse(publishDate) &&
      Date.now() <= Date.parse(publishTimeout)
    );
  }
}
