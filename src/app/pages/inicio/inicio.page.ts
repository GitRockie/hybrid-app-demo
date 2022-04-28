import { Component, OnInit } from '@angular/core';

interface Componentes {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [
    {
      icon: 'american-football-outline',
      name: 'action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'keypad-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Date-Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'sparkles-outline',
      name: 'FAB',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirectTo: '/list-reorder'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
