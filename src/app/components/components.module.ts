import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RoleFormComponent } from './system/role-form/role-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        MenuComponent,
        HeaderComponent,
        RoleFormComponent
    ],
    exports:[
        MenuComponent,
        HeaderComponent,
        RoleFormComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class ComponentModule { }