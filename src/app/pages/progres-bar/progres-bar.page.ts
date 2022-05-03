import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.page.html',
  styleUrls: ['./progres-bar.page.scss'],
})
export class ProgresBarPage implements OnInit {

  percentProgress: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event: any) {
    this.percentProgress = event.detail.value / 100;
    console.log(this.percentProgress)
  }

}
