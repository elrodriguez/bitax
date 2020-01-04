import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/system/user.service';
import { LoadingService } from 'src/app/services/components/loading.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/components/alert.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  
  private dataUser: User;
  private sessionUser: User;
  public sexo: String = '1';

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email es requerido.' },
      { type: 'pattern', message: 'Introduzca un correo electrónico válido.' }
    ],
    'name': [
      { type: 'required', message: 'Nombres es requerido.' }
    ],
    'last_name': [
      { type: 'required', message: 'Apellidos es requerido.' }
    ],
    'dateNac': [
      { type: 'required', message: 'Fecha Nacimiento es requerido.' }
    ]
  };

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.validations_form = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dateNac: new FormControl('', Validators.required),
      sex: new FormControl('')
    });
    this.getUser();
  }
  async saveChanges(values){
    this.dataUser = {
      uid: this.sessionUser.uid,
      email: values.email,
      name: values.name,
      last_name: values.last_name,
      dateNac: values.dateNac,
      sex: values.sex
    };
    this.userService.updateUser(this.dataUser).then( () => {
      this.alertService.presentAlert('Enhorabuena','Mensaje de confirmación','Los datos se actualizaron correctamente.')
      this.errorMessage = "";
    }).catch((error) => {
      this.errorMessage = error.message;
      this.successMessage = "";
    });
  }
  async getUser(){
    this.sessionUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe((data: User) => {
      this.validations_form.setValue({
        email: data.email,
        name: data.name,
        last_name: data.last_name,
        dateNac: data.dateNac,
        sex: data.sex
      });
    },(error2) => {
      console.log(error2);
    });
  }
}
