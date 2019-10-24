import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { SearchComponent } from './search.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { RatesComponent } from './components/rates/rates.component';
import { StarsComponent } from './components/starts/stars.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from '../search-routing/search-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HotelListComponent,
    SearchComponent,
    HotelFormComponent,
    GmapComponent,
    RatesComponent,
    StarsComponent,
    ReservationsComponent,
    ImageGalleryComponent,
    ServicesComponent,
    ContactFormComponent,

  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule,
    RouterModule
  ]
})
export class SearchModule { }
