import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.sass']
})
export class PhonebookComponent implements OnInit {
  contactsArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  constructor(private contactsService: PhonebookService) { }
  

  ngOnInit() {
  	this.contactsService.getContact().subscribe(
		(list) => {
		    this.contactsArray = list.map( (item) => {
		        return {
                    $key : item.key,
                    ...item.payload.val()
		        }
		    })
		}
	);
  }

  onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.contactsService.deleteContact($key);
        this.showDeletedMessage = true;
       	setTimeout(()=> this.showDeletedMessage=false , 3000)
       }
   	}

  filterCondition(contact){
  	return contact.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
  	contact.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
