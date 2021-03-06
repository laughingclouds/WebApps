import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformNameResolverPipe } from './custom-pipes/platform-name-resolver.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    PlatformNameResolverPipe
  ],
  imports: [
    FormsModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressBarModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    PlatformNameResolverPipe
  ],
})
export class AppModule { }
