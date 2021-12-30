import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  //{path: 'Order', component: OrderMasterComponent, canActivate:[AuthGuard]},
 // {path: 'NewProduct', component: NewProductComponent},
  //{path: 'Product', component: ProductsComponent},
  //{path: 'Product/:pid', component: ProductDetailsComponent},
 // {path: 'Profile', loadChildren: () => import('./Components/user-profile/user-profile.module').then(m=> m.UserProfileModule)},
  //{path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
