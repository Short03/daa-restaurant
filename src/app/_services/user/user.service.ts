import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private  users: User[] = [
    {username: 'adrian.short', name: 'Adrian Short'},
    {username: 'adrian.short', name: 'Adrian Short'},
    
  
  ];

  constructor() { }

  getUsers(): User[]{
    return this.users;
  }
  deleteUser(){
    alert('Botón de borrado activado.');
  }
}
