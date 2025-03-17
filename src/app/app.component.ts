import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  users=DUMMY_USERS;
  selectedUserId?:string;// we put a questionmark to that is okay if it is undefined

  get selectedUser(){
    return this.users.find((user) => user.id===this.selectedUserId);
  }

  onSelectUser(id:string){
   this.selectedUserId=id;
   }
}
