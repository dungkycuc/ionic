import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../common/globals';
import { LoginModel } from '../models/root/login.model';
import { AuthService } from '../services/auth.service';
import { CoreService } from '../services/core.service';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../pages/home/home.page';
import { CreateAccountComponent } from '../modals/create-account/create-account.component';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  model = new LoginModel();
  loginForm: FormGroup;
  firstName = 'Tuan Dung';
  constructor(private router: Router,
    private coreService: CoreService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private globals: Globals,
    public modalController: ModalController,
    public toastController: ToastController
  ) {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        [
          Validators.required,
          this.globals.noWhitespaceValidator,
          Validators.maxLength(255),
        ],
      ],
      // parentId: [""],
      password: ["", Validators.minLength(8)],
      email: [""]
    });
  }
  ngOnInit() {

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 100000,

    });
    toast.present();
  }

  validateLogin = () => {
    // if (this.loginForm.invalid) {
    //   console.log('valid cmnr');
    //   return;
    // }
    this.presentToast();

    this.authService.signin(this.model.username, this.model.password).subscribe(async (res) => {
      if (res && res.errorCode === "EXT_0000") {
        await this.authService.saveToken(res.data.token, this.model.username, res.data);
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 200)
      }
    })
  }
  goBack = () => {
    this.router.navigate(["/"])
  }
  toggleLogin = async () => {
    
    const modal = await this.modalController.create({
      component: CreateAccountComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': this.firstName,
        'url': 'signup'
      }
    });
    return await modal.present();
  }
}
