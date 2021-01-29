import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../common/globals';
import { LoginModel } from '../models/root/login.model';
import { AuthService } from '../services/auth.service';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model = new LoginModel();
  loginForm: FormGroup;

  constructor(private router: Router,
    private coreService: CoreService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private globals: Globals
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
    });
  }
  ngOnInit() {
  }
  login = () => {
    if (this.loginForm.invalid) {
      console.log('valid cmnr');
      return;
    }
    this.authService.signin(this.model.username, this.model.password).subscribe(async (res) => {
      if (res && res.errorCode === "EXT_0000") {
        await this.authService.saveToken(res.data.token, this.model.username, res.data);
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 200)
      }
    })
  }
}
