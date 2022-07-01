import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductsComponent} from "./Components/home/home-page/products/products.component";
import { FooterComponent } from './Components/home/home-page/footer/footer.component';
import { HeaderComponent } from './Components/home/home-page/header/header.component';
import { StayConnectedComponent } from './Components/home/home-page/stay-connected/stay-connected.component';
import { TutorialComponent } from './Components/home/home-page/tutorial/tutorial.component';
import { NavigationComponent } from './Components/home/home-page/navigation/navigation.component';
import { MyOrdersComponent } from './Components/User/my-orders/my-orders.component';
import { HomePageComponent } from './Components/home/home-page/home-page.component';
import { LoginComponent } from './Components/User/login/login.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    HeaderComponent,
    StayConnectedComponent,
    TutorialComponent,
    NavigationComponent,
    MyOrdersComponent,
    HomePageComponent,
    LoginComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
