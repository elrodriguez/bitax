import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/api/system/role.service';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Role } from 'src/app/interfaces/role';
import { RoleFormComponent } from 'src/app/components/system/role-form/role-form.component';


@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  loading: any;
  roles: Role[];

  constructor( 
    private roleService: RoleService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.rolesList()
  }
  async rolesList() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espere'
    });
    await this.loading.present();

    this.roleService.getRoles().valueChanges().subscribe( 
      (data: Role[]) => {
        this.roles = data;
        this.loading.dismiss();
      }, (err) => {
        console.log(err)
      });
  }
  async modalRole( key ) {
    const modal = await this.modalCtrl.create({
      component: RoleFormComponent,
      componentProps: {
        'key': key,
      }
    });
    return await modal.present();
  }

  async presentAlertConfirm( item ) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar!',
      message: 'Seguro que desea eliminar: '+ item.name,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Continuar',
          handler: () => {
            this.destroyRole(item.key);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async destroyRole(key){
    this.loading = await this.loadingCtrl.create({
      message: 'Espere'
    });
    await this.loading.present();

    this.roleService.deleteRole(key).then( () => {
      this.alertCtrl.create({
        header: 'Enhorabuena',
        message: 'Se Elimino correctamente.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });

      this.loading.dismiss();
    }).catch( (error) => {
      console.log(error)
    })
  }
}
