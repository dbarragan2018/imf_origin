import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginEntroComponent } from './login-entro/login-entro.component';
import {RouterModule}from '@angular/router';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEntroComponent,
    HomeComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'login-entro',
        component: LoginEntroComponent
      },

      {
        path: 'registrar',
        component: RegistrarComponent
      },


      {
        path: '',
        component: HomeComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
