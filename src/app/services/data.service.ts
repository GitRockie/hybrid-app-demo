import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getMenuOpt() {
    return this.http.get<Componentes[]>('/assets/data/menu-options.json');
  }

  getHeroes() {
    return this.http.get<Componentes[]>('/assets/data/superheroes.json');
  }




}
