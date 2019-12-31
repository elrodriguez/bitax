import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menu } from 'src/app/interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient ) { }

  getMenuOpts(){
    return this.http.get<menu[]>('/assets/data/menu.json')
  }
}
