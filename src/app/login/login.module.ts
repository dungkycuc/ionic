import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { InputModule } from '../components/input/input.module';
import { CoreService } from '../services/core.service';
import { AuthService } from '../services/auth.service';
import { IonShareModule } from '../common/share.module';

@NgModule({
  imports: [
    IonicModule,
    InputModule,
    LoginPageRoutingModule,
    IonShareModule
  ],
  declarations: [LoginPage],
  providers: [CoreService, AuthService]
})
export class LoginPageModule { }
