import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componentes } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
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
