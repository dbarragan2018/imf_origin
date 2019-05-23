import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url='https://servitek.clrswap.com/proy-servicios/index.php/Controlador_imf/';

  constructor(private http: HttpClient){}


  imflogin() {
    return this.http.get(`${this.url}imflogin`);
  }

}
