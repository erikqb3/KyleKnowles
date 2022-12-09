import { Injectable } from '@angular/core';
import { Contact } from '../models/haveIDs/haveIDs/contact.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  // deleteReview(review: Review) {
  //   throw new Error('Method not implemented.');
  // }
  private ownerContact: Contact[] = [];
  private fireBase_link: string = "https://kyleknowles-749f3-default-rtdb.firebaseio.com/Contact.json";
  // private fireBase_link: string = "https://localhost:7057/api/Contact";
  private currentId!: number;
  public contactTagSelectedEvent = new Subject<Contact>();
  public contactChangedEvent = new Subject<Contact[]>();
  public maxContactId!: number;
  public gottenContact: Contact;

  constructor(
    private http: HttpClient
  ) { 
    this.ownerContact = [];
  }

  getContact(){
    this.http
      .get<Contact[]>(this.fireBase_link)
        .subscribe(
          (contact: Contact[])=>{
            this.ownerContact = contact;
            this.contactChangedEvent.next(this.ownerContact.slice());
            console.log(this.ownerContact);
            return this.ownerContact;
          }
        )
  }
  // getReview(id:string): Contact {
  //   console.log(this.reviews);
  //   console.log(id);
  //   this.reviews.forEach(singleReview => {
  //     if (id == singleReview.Id) {
  //       this.gottenReview = singleReview;
  //     }
  //   });
  //   return this.gottenReview;
  // }
  
  onDelete(contact: Contact){
    if (!contact){
      return;
    }
    const pos = this.ownerContact.indexOf(contact);
    if (pos < 0){
      return;
    }

    this.ownerContact.splice(pos,1);
    this.storeReview();
  } 

  storeReview(){
    const storedContact = this.ownerContact;
    this.http
      .put(this.fireBase_link, storedContact)
        .subscribe(response => {
          this.contactChangedEvent.next(this.ownerContact.slice());
        })
  }


}
