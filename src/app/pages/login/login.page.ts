import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from 'src/app/services/api/system/user.service';
import { User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/components/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
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

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
 
 
  loginUser(value){
    this.authService.loginUser(value).then(res => {
      this.userService.getUserById(res.user.uid).valueChanges().subscribe((data: User) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.errorMessage = "";
        this.navCtrl.navigateForward('/dashboard');
      },(error2) => {
        console.log(error2);
      });
    }, err => {
      this.alertService.presentAlert('Error','No pudiste iniciar sesión','la contraseña no es válida o el usuario no tiene una contraseña.');
      //this.errorMessage = err.message;
    })
  }

  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }
  
}
