import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/interfaces/user';
import { LoadingService } from 'src/app/services/components/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dataUser: User = {};

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private menuCtrl: MenuController,
    private loadingService: LoadingService
  ) {
    this.getUserSession()
  }

  ngOnInit() {
    
  }

  logout(){
    this.authService.logoutUser().then(res => {
      localStorage.removeItem('user');
      this.navCtrl.navigateBack('/login');
    }).catch(error => {
      console.log(error);
    })
  }
  
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  getUserSession(){
    this.dataUser = JSON.parse(localStorage.getItem('user'));
  }

}
