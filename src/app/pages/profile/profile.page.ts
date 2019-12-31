import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/api/system/user.service';
import { LoadingService } from 'src/app/services/components/loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userAvatar: string;
  private dataUser: User = {};
  private sessionUser: User = {};

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {
    this.loadingService.showLoading('Espere');
    this.sessionUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe((data: User) => {
      this.dataUser = data
      this.loadingService.hideLoading()
    },(error2) => {
      console.log(error2);
    });
  }

  ngOnInit() {
    this.userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTDL4Cw8qGMQhaV7DSI6lBXergjv2nhPFEf5Q-r-g0K25Kn9G7Q&s";
  }

}
