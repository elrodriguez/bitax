import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCodeService {

  constructor() { }

  getKey(){
    let f = new Date();

    return f.getFullYear()+''+f.getMonth()+''+f.getDay()+''+f.getHours()+''+f.getMinutes()+''+f.getSeconds()+''+f.getMilliseconds();
  }


}
