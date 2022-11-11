import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/main/main.component';
import { AboutOptComponent } from './components/main/about-opt/about-opt.component';
import { ContactOptComponent } from './components/main/contact-opt/contact-opt.component';
import { HomeOptComponent } from './components/main/home-opt/home-opt.component';
import { ReviewsOptComponent } from './components/main/reviews-opt/reviews-opt.component';
import { ServicesOptComponent } from './components/main/services-opt/services-opt.component';

import { OwnerComponent } from './components/owner/owner.component';
import { InfoTabComponent } from './components/owner/info-tab/info-tab.component';
import { PhotosTabComponent } from './components/owner/photos-tab/photos-tab.component';
import { ReviewsTabComponent } from './components/owner/reviews-tab/reviews-tab.component';
import { ServicesTabComponent } from './components/owner/services-tab/services-tab.component';
import { TabsComponent } from './components/owner/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OwnerComponent,
    AboutOptComponent,
    ContactOptComponent,
    HomeOptComponent,
    ReviewsOptComponent,
    ServicesOptComponent,
    InfoTabComponent,
    TabsComponent,
    PhotosTabComponent,
    ReviewsTabComponent,
    ServicesTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
