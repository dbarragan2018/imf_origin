import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url='https://servitek.clrswap.com/proy-servicios/index.php/Controlador_imf/';

  public url2='https://servitek.clrswap.com/proy-servicios/index.php/Controlador_imfr/';
  
  constructor(private http: HttpClient){}


  imflogin() {
    return this.http.get(`${this.url}imflogin`);
  }

  imfregistrar(credenciales) {
    console.log("hola 22222222");
    return this.http.post(`${this.url2}imfregistrar.php`, JSON.stringify(credenciales));    
  }
  
}
