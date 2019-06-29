import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.sass']
})
export class ContactsFormComponent implements OnInit {

  constructor(private contactsService:PhonebookService) { }
  submitted: boolean;
  formControls = this.contactsService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit(){
   	this.submitted = true;
   	if(this.contactsService.form.valid){
        if(this.contactsService.form.get("$key").value == null ){ 
   			    this.contactsService.insertContact(this.contactsService.form.value);
        } else {
            this.contactsService.updateContact(this.contactsService.form.value); 
            this.showSuccessMessage =true;
            setTimeout(() => this.showSuccessMessage = false, 3000);
            this.submitted = false;
            this.contactsService.form.reset();          
        }
   	}
  }

}
