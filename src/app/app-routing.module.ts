import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './component/product-item-details/product-item-details.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [

  {path:'',component:ProductListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-item',component:ProductItemComponent},
  {path:'product-item-details/:id',component:ProductItemDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'**',component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
