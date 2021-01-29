import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides, NavController, ModalController } from "@ionic/angular";
import * as async from "async";
import * as _ from "lodash";

import { nextTick } from "process";
import { CoreService } from "src/app/services/core.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  searchText: string;
  lstShopsClone = [];
  arr = [
    {
      id: 1,
      name: 'X',
      url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
    },
    {
      id: 2,
      name: 'Y',
      url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
    },
    {
      id: 3,
      name: 'Z',
      url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
    }
  ];
  shops = [];

  constructor(
    private nav: NavController,
    private coreService: CoreService
  ) {

  }

  ngOnInit() {
    async.parallel(
      [
        (cb) => {
          this.coreService.Get("/api/1common/v1/find/droplist/STATUS_ACTIVE").subscribe({
            next: data => {
              console.log(111, data);
              cb();
            },
            error: error => {
              cb();
            }
          })
        }
      ]
    )
  }
  doRefresh(event) {
    this.shops = [
      {
        id: 1,
        name: 'X',
        url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
      },
      {
        id: 2,
        name: 'Y',
        url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
      },
      {
        id: 3,
        name: 'Z',
        url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
      },
      {
        id: 4,
        name: 'X',
        url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
      },
      {
        id: 5,
        name: 'X',
        url: 'https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA'
      },
    ];
    this.lstShopsClone = _.cloneDeep(this.shops);
    console.log(this.lstShopsClone);
    setTimeout(() => {
      event.target.complete();
    }, 300);
  }
  searchData = () => {
    this.shops = this.lstShopsClone.filter(ele => {
      return ele.name == this.searchText;
    });
    console.log(this.shops);
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  detailShop() {
    console.log('xxx');
    this.nav.navigateForward(["tabs/account"]);
  }
}
