import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <div class="title">Contacts</div>
    <div class="content">
      <form #contactForm="ngForm" (submit)="send.emit(contactForm.value)" >
        <input type="text" placeholder="Your email*" required
        name="email"
        [ngModel]
        >
        <textarea cols="20" rows="6" placeholder="Your message*" required
        name="msg"
        [ngModel]
        ></textarea>
        <button type="submit" [disabled]="contactForm.invalid" >SEND</button>
      </form>
  </div>
  `,
  styles: []
})
export class ContactFormComponent{

  @Output() send:EventEmitter<any> = new EventEmitter<any>();

}
