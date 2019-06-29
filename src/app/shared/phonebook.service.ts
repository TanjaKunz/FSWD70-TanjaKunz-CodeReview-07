import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(public firebase: AngularFireDatabase) { }
  contactList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl(''),
     mobile: new FormControl('', [Validators.required,Validators.minLength(6)]),
     email: new FormControl('', Validators.email)     
  });

  getContact(){
     this.contactList = this.firebase.list('contacts');
     return this.contactList.snapshotChanges();
  }

    insertContact(contact){
      this.contactList.push({
        firstName: contact.firstName,
        lastName: contact.lastName,
        mobile: contact.mobile,
        email: contact.email
      });
    } 

    populateForm(contact){
      this.form.setValue(contact);
    }

    updateContact(contact){
      this.contactList.update(contact.$key,{
        firstName: contact.firstName,
        lastName: contact.lastName,
        mobile: contact.mobile,
        email: contact.email
      });
    }
    
    deleteContact($key: string){
      this.contactList.remove($key);
    };
  
}
