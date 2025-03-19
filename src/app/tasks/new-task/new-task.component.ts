import { TasksService } from './../../services/tasks.service';
import { NewTask } from './../task/task.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close=new EventEmitter<void>();
  constructor(private tasksService:TasksService){}

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
    onCancel(){
      this.close.emit();
    }
   onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate},this.userId);
      this.close.emit();
}
}
