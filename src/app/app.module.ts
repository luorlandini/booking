import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './features/search/search.component';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { GmapComponent } from './features/search/components/gmap/gmap.component';
import { RatesComponent } from './features/search/components/rates/rates.component';
import { StarsComponent } from './features/search/components/starts/stars.component';
import { ReservationsComponent } from './features/search/components/reservations/reservations.component';
import { ImageGalleryComponent } from './features/search/components/image-gallery/image-gallery.component';
import { ServicesComponent } from './features/search/components/services/services.component';
import { ContactFormComponent } from './features/search/components/contact-form/contact-form.component';
import { NoResultsComponent } from './features/search/no-results.component';
import { SharedModule } from './features/shared/shared.module';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { LoginModule } from './features/login/login.module';
import { SearchModule } from './features/search/search.module';
@NgModule({
  declarations: [
    AppComponent,
    NoResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    CartModule,
    LoginModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }