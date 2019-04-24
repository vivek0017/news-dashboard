import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class newsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=In&' + 'apiKey=91a6a536d9a84ae1a1bc935a7cb59b06';
    return this.http.get(url);
  }
}
