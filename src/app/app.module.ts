import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContentComponent } from './Components/LayoutComponent/content/content.component';
import { FooterComponent } from './Components/LayoutComponent/footer/footer.component';
import { HeaderComponent } from './Components/LayoutComponent/header/header.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    InvoiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
