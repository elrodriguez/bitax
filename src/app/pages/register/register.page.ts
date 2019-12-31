import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/api/system/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryRegister(value){
    this.authService.registerUser(value).then(res => {
      const user = {
        uid:res.user.uid,
        email:res.user.email
      }
      this.userService.createUser(user).then( (data) => {
        this.navCtrl.navigateBack('/login');
      }).catch( (error) => {
        alert('no se pudo registrar')
      })
      this.errorMessage = "";
      this.successMessage = "Tu cuenta ha sido creada. Por favor Iniciar sesión.";
     }).catch( err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
 
  goLoginPage(){
    this.navCtrl.navigateBack('');
  }
  
}
