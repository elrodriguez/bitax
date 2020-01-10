import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/api/system/user.service';
import { LoadingService } from 'src/app/services/components/loading.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userAvatar: any;
  private dataUser: User = {};
  private sessionUser: User;


  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private camera: Camera,
    private angularFireStorage: AngularFireStorage
  ) {
    this.getData();
  }

  ngOnInit() {
    
    this.userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTDL4Cw8qGMQhaV7DSI6lBXergjv2nhPFEf5Q-r-g0K25Kn9G7Q&s";
    let id = Math.random().toString(36).substring(2);
    let filePath = 'upload/users/'+this.sessionUser.uid+'/'+id+'.jpeg'
    const pictures = this.angularFireStorage.ref(filePath);
    const tack = this.angularFireStorage.upload(filePath,this.userAvatar);
  }
  async onUploadAvatar(file){
    let id = Math.random().toString(36).substring(2);
    let filePath = 'upload/users/'+this.sessionUser.uid+'/'+id+'.jpeg'
    const pictures = this.angularFireStorage.ref(filePath);
    const tack = this.angularFireStorage.upload(filePath,file);
  }

  async getData(){
    this.sessionUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe((data: User) => {
      this.dataUser = {
        email: data.email,
        uid: data.uid,
        name: data.name,
        last_name: data.last_name,
        dateNac: data.dateNac,
        sex: data.sex
      }
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
      this.userAvatar = 'data:image/jpeg;base64,' + imageData;
      
      this.onUploadAvatar(this.userAvatar);
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
      this.userAvatar = 'data:image/jpeg;base64,' + imageData;
      this.onUploadAvatar(this.userAvatar);
    }, (err) => {
      console.log(err)
    });
  }
}
