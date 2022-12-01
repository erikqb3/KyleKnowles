import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/main/main.component';
import { AboutOptComponent } from './components/main/about-opt/about-opt.component';
import { ContactOptComponent } from './components/main/contact-opt/contact-opt.component';
import { HomeOptComponent } from './components/main/home-opt/home-opt.component';
import { ReviewsOptComponent } from './components/main/reviews-opt/reviews-opt.component';
import { ReviewCreateComponent } from './components/main/reviews-opt/review-create/review-create.component'
import { SingleReviewComponent } from './components/main/reviews-opt/singleReview/single-review.component';
import { DealsOptComponent } from './components/main/deals-opt/deals-opt.component';

import { OwnerComponent } from './components/owner/owner.component';
import { InfoTabComponent } from './components/owner/info-tab/info-tab.component';
import { PhotosTabComponent } from './components/owner/photos-tab/photos-tab.component';
import { ReviewsTabComponent } from './components/owner/reviews-tab/reviews-tab.component';
import { DealsTabComponent } from './components/owner/deals-tab/deals-tab.component';
import { TabsComponent } from './components/owner/tabs/tabs.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SingleReviewOwnerComponent } from './src/app/components/owner/reviews-tab/singleReview_owner/single-review-owner/single-review-owner.component';



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
    DealsOptComponent,
    InfoTabComponent,
    TabsComponent,
    PhotosTabComponent,
    ReviewsTabComponent,
    DealsTabComponent,
    SingleReviewComponent,
    ReviewCreateComponent,
    SingleReviewOwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
