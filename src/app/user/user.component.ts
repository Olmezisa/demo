import { Component,Output,Input,EventEmitter } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input({required:true}) id!:string;
  //@Input({required:true}) avatar!: string;
  //@Input({required:true}) name!:string;
  @Input({required: true}) user!: User;
  @Input({required:true}) isSelected!:boolean;
  @Output() select = new EventEmitter();



  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);

  }

}
