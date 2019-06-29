import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantComponent } from './important/important.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { PhonebookService } from './shared/phonebook.service';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import { NavbarComponent } from './navbar/navbar.component';


import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ImportantComponent,
    PhonebookComponent,
    ContactsFormComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
