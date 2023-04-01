import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductComponent },
    { path: ':id/edit', component: EditProductComponent }
  ]},  
  { path: 'users', component: UsersComponent, children: [
    { path: ':name', component: UserComponent }
  ]},  
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    ProductsComponent,
    NotfoundComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
