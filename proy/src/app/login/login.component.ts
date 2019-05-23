import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService) { }
  informacion = null;
credenciales ={
  username: null,
  password: null
}

imflogin() {
  this.AuthService.imflogin().subscribe(resultado => this.informacion = resultado);
  console.log(this.informacion.username);
  console.log("hola mundo");
}
  
  ngOnInit() {

  }

  ingresar(event){
    event.preventDefault();

    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;




    console.log(username, password);
    
    console.log("Si entro al login");
    console.log(event);
    this.imflogin();    
  }

}
