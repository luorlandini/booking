import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotel} from '../../../../model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
  <div class="font-big">Hotel in {{text}}</div>

  <div
    *ngFor="let hotel of hotels"
    class="horiz-grid separator"
    (click)="setActive.emit(hotel)"
    [ngClass]="{'active': hotel.id == active?.id}"
    >
    <div>{{ hotel.name }}</div>
    <div>da {{hotel.rooms[0].price}} </div>
  </div>

  <div class="separator"></div>
  <div class="horiz-grid">
    <div></div>
    <em>{{hotels?.length}}</em>
  </div>


  `,
  styles: []
})
export class HotelListComponent {

  @Input() hotels: Hotel[];
  @Input() active: Hotel;
  @Input() text: string;
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();

}
