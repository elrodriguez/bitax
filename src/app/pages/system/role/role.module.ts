import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolePageRoutingModule } from './role-routing.module';

import { RolePage } from './role.page';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolePageRoutingModule,
    ComponentModule
  ],
  declarations: [RolePage]
})
export class RolePageModule {}
