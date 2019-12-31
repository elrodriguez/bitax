import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( private angularFireDatabase: AngularFireDatabase ) { }

  getRoles(){
    return this.angularFireDatabase.list('/roles');
  }

  getRoleById(key){
    return this.angularFireDatabase.object('/roles/'+key);
  }

  createRole(role){
    return this.angularFireDatabase.object('/roles/'+role.key).set(role)
  }

  updateRole(role){
    return this.angularFireDatabase.object('/roles/'+role.key).update(role)
  }

  deleteRole(key) {
    this.angularFireDatabase.object('/roles/' + key).remove();
  }
  
}
