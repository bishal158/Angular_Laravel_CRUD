import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AlertModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ]
})
export class UsersModule {  }
