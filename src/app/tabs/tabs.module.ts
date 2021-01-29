import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { HttpClient } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: "wishlist",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/wishlist/wishlist.module").then(
                (m) => m.WishlistPageModule
              ),
          },
        ],
      },
      {
        path: "cart",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/cart/cart.module").then((m) => m.CartPageModule),
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/account/account.module").then(
                (m) => m.AccountPageModule
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
})
export class TabsPageModule { }
