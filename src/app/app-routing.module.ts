import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantComponent } from './important/important.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { PhonebookService } from './shared/phonebook.service';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{ path:"",component: HomePageComponent },
{ path:"important",component: ImportantComponent },
{ path:"phonebook",component: ContactsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
