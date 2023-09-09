import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
    children: [
      { path: 'add-user', component: AddUserComponent},
      { path: 'user-list', component: UserListComponent},
      { path: 'update-user', component: UpdateUserComponent},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
