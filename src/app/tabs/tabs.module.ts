import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TabsPage } from "./tabs.page";
import { HttpClient } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },
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
    ],
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
})
export class TabsPageModule { }
