import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name: string; 
  @Input() country: string; 

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeNoArguments() {
    this.modalCtrl.dismiss();
  }

  closeWithArguments() {
    this.modalCtrl.dismiss({
      name: 'Kyra',
      country: 'Pais Vasco'
    })
  }

}
