import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from './news-model';
import { newsService } from './news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-dashboard';
  profiles: any;

  constructor(public _newsService: newsService) { }

  ngOnInit() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=91a6a536d9a84ae1a1bc935a7cb59b06';
    this.CreateNewsDashboard();
  }

  CreateNewsDashboard() {
    this._newsService.getNews().subscribe((res: Response) => {
      this.profiles = res;
      console.log(this.profiles);
    });
  }

}

