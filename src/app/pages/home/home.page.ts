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
  // ======== SLIDE ========
  // VIEW CHILD
  @ViewChild("slideHeader", { static: true })
  slideHeader: IonSlides;
  slideHeaderOpts = {
    slidesPerView: 1,
    effect: "flip",
    speed: 1000,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  slideChains = {
    slidesPerView: 3,
    effect: "flip",
    speed: 1000,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  slideProduct = {
    slidesPerView: 2,
    effect: "flip",
    speed: 1000,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }
  // ======== END SLIDE ========

  searchText: string;
  lstShopsClone = [];
  lstSlideHeader = [
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
  lstSlideChains = [
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
    }, {
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
  lstChains = [
    {
      title: 'Rau',
      children: [
        {
          name: 'Rau 1',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 2',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 3',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 4',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 5',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
      ]
    },
    {
      title: 'Củ',
      children: [
        {
          name: 'Rau 1',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 2',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 3',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 4',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
        {
          name: 'Rau 5',
          url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
        },
      ]
    }
  ];
  shops = [];

  constructor(
    private nav: NavController,
    private coreService: CoreService
  ) {

  }

  ngOnInit() {
    console.log('xxxx');
    async.waterfall(
      [
        (cb) => {
          console.log('yyyyy');
          this.coreService.Get("/api/common/v1/find/droplist/STATUS_ACTIVE").subscribe({
            next: data => {
              cb();
            },
            error: error => {
              cb();
            }
          })
        },
        (cb, data) => {
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
    setTimeout(() => {
      event.target.complete();
    }, 300);
  }
  searchData = () => {
    this.shops = this.lstShopsClone.filter(ele => {
      return ele.name == this.searchText;
    });
  }


  slidesDidLoad = (slides: IonSlides) => {
    // slides.startAutoplay()
  }
  nextSlide = () => console.log(11, this.slideHeader);
  prevSlide = () => this.slideHeader.slidePrev();


  detailShop() {
    console.log('xxx');
    this.nav.navigateForward(["tabs/account"]);
  }
  loadMoreData = (evt) => {
    console.log(22, evt);
    if (evt.isTrusted) {
      this.lstChains = [
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },
        {
          title: 'Rau',
          children: [
            {
              name: 'Rau 1',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 2',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 3',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 4',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
            {
              name: 'Rau 5',
              url: 'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2016_07_21/rau_xanh_thai_doc_2.jpg'
            },
          ]
        },

      ]
    } else {
      evt.target.complete();
    }

  }
}
