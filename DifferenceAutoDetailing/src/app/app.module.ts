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
import { HomeOptSingleComponent } from './components/main/home-opt/home-opt-single/home-opt-single.component';
import { HomeOptDisplayComponent } from './components/main/home-opt/home-opt-display/home-opt-display.component';
import { PortfolioFilterPipe } from './components/main/home-opt/portfolio-filter.pipe';

import { ReviewsOptComponent } from './components/main/reviews-opt/reviews-opt.component';
import { ReviewCreateComponent } from './components/main/reviews-opt/review-create/review-create.component'
import { SingleReviewComponent } from './components/main/reviews-opt/singleReview/single-review.component';

import { DealsOptComponent } from './components/main/deals-opt/deals-opt.component';
import { DealsComponent } from './components/main/deals-opt/deals/deals.component';
import { FeaturesComponent } from './components/main/deals-opt/features/features.component';
import { DealsFilterPipe } from './components/main/deals-opt/deals-filter.pipe';

import { OwnerComponent } from './components/owner/owner.component';
import { TabsComponent } from './components/owner/tabs/tabs.component';
import { InfoTabComponent } from './components/owner/info-tab/info-tab.component';
import { PhotosTabComponent } from './components/owner/photos-tab/photos-tab.component';

import { ReviewsTabComponent } from './components/owner/reviews-tab/reviews-tab.component';
import { ReviewsTabSingleReviewComponent } from './components/owner/reviews-tab/reviews-tab-single-review/reviews-tab-single-review.component';
import { ReviewsTabDisplayComponent } from './components/owner/reviews-tab/reviews-tab-display/reviews-tab-display.component';

import { DealsTabComponent } from './components/owner/deals-tab/deals-tab.component';
import { DealsTagsComponent } from './components/owner/deals-tab/deals-tags/deals-tags.component';
import { DealsDisplayComponent } from './components/owner/deals-tab/deals-display/deals-display.component';
import { DealsDisplaySingleComponent } from './components/owner/deals-tab/deals-display/deals-display-single/deals-display-single.component';
import { FeaturesDisplayComponent } from './components/owner/deals-tab/features-display/features-display.component';
import { FeaturesDisplaySingleComponent } from './components/owner/deals-tab/features-display/features-display-single/features-display-single.component';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";


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
    ReviewsTabSingleReviewComponent,
    ReviewsTabDisplayComponent,
    HomeOptSingleComponent,
    DealsComponent,
    FeaturesComponent,
    DealsFilterPipe,
    DealsTagsComponent,
    DealsDisplayComponent,
    FeaturesDisplayComponent,
    DealsDisplaySingleComponent,
    FeaturesDisplaySingleComponent,
    HomeOptDisplayComponent,
    PortfolioFilterPipe,
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
