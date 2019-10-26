import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../model/hotels';
import { CartService } from 'src/app/core/services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text= 'Rome'
  hotels: Hotel[];
  active: Hotel;
  activeImage: string;

  constructor(
    private http: HttpClient,
    public cart: CartService,
    private router: Router
    ) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text=text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
          .subscribe(result =>{
            if(!result.length){
              this.router.navigateByUrl('search/no-results');
              return;
            }
            this.hotels = result;
            this.setActive(this.hotels[0]);
          })
  }

  setActive(hotel: Hotel){
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }

  sendEmail({email, msg}){
    console.log(`sent
                ${email},
                ${msg},
                ${this.active.email}`
                );
  }

}
