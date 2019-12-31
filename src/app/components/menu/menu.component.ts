import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/api/system/menu.service';
import { Observable } from 'rxjs';
import { menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private menuService: MenuService ) { }

  menuOpts: Observable<menu[]>;

  ngOnInit() {
    this.menuOpts = this.menuService.getMenuOpts()
  }

}
