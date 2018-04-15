import { Injectable } from '@angular/core';
import { YesNoComponent } from './yes-no/yes-no.component';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class YesOrNoService {

  private yesnoUrl = 'https://yesno.wtf/api';
  private chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(
    private http: HttpClient,
  ) { }

  getData() {
    return this.http.get(this.yesnoUrl);
  }

  getChucksData() {
    return this.http.get(this.chuckNorrisUrl);
  }
}
