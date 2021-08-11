import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { ProductFeatureComponent } from './components/feature-section/product-feature/product-feature.component';
import { FooterNavbarComponent } from './components/footer-navbar/footer-navbar.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { PricingViewComponent } from './components/pricing-section/pricing-view/pricing-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FeatureSectionComponent,
    ProductFeatureComponent,
    FooterNavbarComponent,
    HeaderNavbarComponent,
    PricingSectionComponent,
    PricingViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
