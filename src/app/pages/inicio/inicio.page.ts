import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Componentes } from '../../interfaces/interfaces';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componentes[]>

  constructor( private menuCtrl: MenuController,
               private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpt();
  }

  showMenu() {
    this.menuCtrl.open('first');
  }

}
