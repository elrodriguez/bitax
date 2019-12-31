import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {

  dateNac: Date = new Date();
  monthShortNames: string[] = ["Ene","Feb","Mar","May","Jun","Ago","Sep","Oct","Nov","Dic"];
  constructor() {

  }

  ngOnInit() {
  }

}
