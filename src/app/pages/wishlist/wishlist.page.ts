import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.page.html",
  styleUrls: ["./wishlist.page.scss"],
})
export class WishlistPage implements OnInit {
  products: any;
  isAuthenticated: BehaviorSubject<boolean>;

  constructor(
  ) { }

  ngOnInit() {
  }

 
}
