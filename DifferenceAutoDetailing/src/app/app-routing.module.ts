import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/main/main.component';
import { AboutOptComponent } from './components/main/about-opt/about-opt.component';
import { ContactOptComponent } from './components/main/contact-opt/contact-opt.component';
import { HomeOptComponent } from './components/main/home-opt/home-opt.component';
import { ReviewsOptComponent } from './components/main/reviews-opt/reviews-opt.component';
import { DealsOptComponent } from './components/main/deals-opt/deals-opt.component';

import { OwnerComponent } from './components/owner/owner.component';
import { InfoTabComponent } from './components/owner/info-tab/info-tab.component';
import { PhotosTabComponent } from './components/owner/photos-tab/photos-tab.component';
import { ReviewsTabComponent } from './components/owner/reviews-tab/reviews-tab.component';
import { DealsTabComponent } from './components/owner/deals-tab/deals-tab.component';
import { TabsComponent } from './components/owner/tabs/tabs.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'deals', component: DealsOptComponent},
  {path: 'reviews', component: ReviewsOptComponent},
  {path: 'about', component: AboutOptComponent},
  {path: 'contact', component:ContactOptComponent},
  {path: 'owner', component:OwnerComponent, children: [
    { path: 'photos', component: PhotosTabComponent },
    { path: 'deals', component: DealsTabComponent },
    { path: 'reviews', component: ReviewsTabComponent},
    { path: 'info', component: InfoTabComponent}
  ]}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
