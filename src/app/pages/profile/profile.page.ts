import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/api/system/user.service';
import { LoadingService } from 'src/app/services/components/loading.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userAvatar: any;
  private dataUser: User = {};
  private sessionUser: User = {};


  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private camera: Camera
  ) {
    
  }

  ngOnInit() {
    this.getData();
    this.userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTDL4Cw8qGMQhaV7DSI6lBXergjv2nhPFEf5Q-r-g0K25Kn9G7Q&s";
  }

  async getData(){
    this.sessionUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe((data: User) => {
      this.dataUser = data
    },(error2) => {
      console.log(error2);
    });
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:false,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }
    this.camera.getPicture(options).then((imageData) => {
      let userAvatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err)
    });
  }

  searchInGallery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:false,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }
    this.camera.getPicture(options).then((imageData) => {
      let userAvatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err)
    });
  }
}
