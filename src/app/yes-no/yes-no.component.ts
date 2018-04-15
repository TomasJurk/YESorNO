import { Component, OnInit } from '@angular/core';
import { YesOrNoService } from '../yes-or-no.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {

  answer;
  background;
  joke;

  constructor(
    private yesOrNoService: YesOrNoService
  ) { }

  ngOnInit() {
  }

  getData() {
    this.yesOrNoService.getData().subscribe(result => {
      this.answer = result;
      this.setBackground();
    });
  }

  getChucksData() {
    this.yesOrNoService.getChucksData().subscribe(result => {
      this.joke = result; 
      console.log(result);
    });
  }

  setBackground() {
    let styles;
      if (this.answer) {
        styles = {
          'background-image': 'url(' + this.answer.image + ')',
          'background-position': 'center center',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'color': 'white',
          'font-size': '40px'
        };
      }
    return styles;
  }

}
