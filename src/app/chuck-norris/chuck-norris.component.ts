import { Component, OnInit } from '@angular/core';
import { YesOrNoService } from '../yes-or-no.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.scss']
})
export class ChuckNorrisComponent implements OnInit {

  joke;

  constructor(
    private yesOrNoService: YesOrNoService
  ) { }

  ngOnInit() {
    this.getChucksData();
  }

  getChucksData() {
    this.yesOrNoService.getChucksData().subscribe(result => this.joke = result);
  }

}
