import { TasksService } from './../../services/tasks.service';
import { Component,EventEmitter,Input, Output, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  constructor(private tasksService:TasksService){}


  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
