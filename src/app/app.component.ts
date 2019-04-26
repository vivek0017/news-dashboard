import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from './news-model';
import { newsService } from './news.service';
import { LocalApiService } from './local-api.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-dashboard';
  profiles: any;

  constructor(private afAuth: AngularFireAuth, public _newsService: newsService, private _localApi: LocalApiService) { }

  ngOnInit() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=91a6a536d9a84ae1a1bc935a7cb59b06';
    this.CreateNewsDashboard();
    this.getCountryList();
    setInterval(() => {
      this.CreateNewsDashboard();
    }, 50000);
    //this.consumeResponse();
  }

  consumeResponse() {
    this.afAuth.authState
      .subscribe(user => {
        console.log(user);
      });
  }

  CreateNewsDashboard() {
    this._newsService.getNews().subscribe((res: Response) => {
      this.profiles = res;
      console.log(this.profiles);
    });
  }

  getCountryList() {
    console.log(this._localApi.getConfig().subscribe((res: Response) => console.log(res)));
  }

  LogoutGoogle() {
    this._localApi.logout();
    console.log('Signout completed successfully...');
  }

}

