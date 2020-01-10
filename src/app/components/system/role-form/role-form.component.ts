import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/api/system/role.service';
import { CreateCodeService } from 'src/app/services/create-code.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent implements OnInit {

  @Input() name;
  @Input() state;
  @Input() key;
  @Input() code;

  title: string = 'Nuevo Rol';
  btnText: string = 'Guardar';

  validations_form: any;
  role: Role;

  loading: any;

  validation_messages = {
      'code': [
        { type: 'required', message: 'Se requiere el código.' }
      ],
      'name': [
        { type: 'required', message: 'Se requiere el nombre.' }
      ]
    }

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private createCodeService: CreateCodeService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { 
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      state: new FormControl(true)
    });
  }

  ngOnInit() {
    if(this.key){
      this.title = 'Editar Rol';
      this.btnText = 'Actualizar';
      this.getRole();
    }else{
      this.title = 'Nuevo Rol';
      this.btnText = 'Guardar';
    }
  }

  async dismissModal() {
      this.modalCtrl.dismiss().then(() => { console.log('dismiss modal') });
  }

  async onSubmit( event ){
    if(this.key){
      this.modifyRole( event );
    }else{
      this.createRole( event );
    }
  }

  async getRole(){
    this.roleService.getRoleById(this.key).valueChanges().subscribe((data: Role) => {
      this.validations_form.setValue({name: data.name, code: data.code,state: data.state});
    },(error2) => {
      console.log(error2);
    });
  }

  async createRole( event ){

    this.loading = await this.loadingCtrl.create({
      message: 'Espere'
    });
    await this.loading.present();

    this.role = {
      key: this.createCodeService.getKey(),
      name: event.name,
      state: event.state,
      code: event.code
    }
    this.roleService.createRole(this.role).then( () => {
      this.alertCtrl.create({
        header: 'Enhorabuena',
        message: 'Se registro correctamente.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });

      this.loading.dismiss();
    }).catch( (error) => {
      console.log(error)
    })
  }

  async modifyRole( event ){

    this.loading = await this.loadingCtrl.create({
      message: 'Espere'
    });
    await this.loading.present();

    this.role = {
      key: this.key,
      name: event.name,
      state: event.state,
      code: event.code
    }
    this.roleService.updateRole(this.role).then( () => {
      this.alertCtrl.create({
        header: 'Enhorabuena',
        message: 'Se actualizó correctamente.',
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
