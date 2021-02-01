import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet, ActionSheetController, PopoverController, ModalController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  @Input() firstName: string;
  @Input() url: string;
  @Input() middleInitial: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(222, this.firstName);
  }
  goBack = () => this.modalCtrl.dismiss();
} 
