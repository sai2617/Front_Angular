import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HttpClientModule } from '@angular/common/http'
import { SharedDataService } from './shared-data.service';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'notes-list', component: NotesListComponent },
  { path: 'notes', component: NotesComponent},
  { path: 'shared-notes', component: SharedNotesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NotesComponent,
    NotesListComponent,
    SharedNotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedDataService],
  // bootstrap: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
