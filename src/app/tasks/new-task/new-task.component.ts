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
  @Output() cancel=new EventEmitter<void>();
  @Output() createTask=new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
    onCancel(){
      this.cancel.emit();
    }
   onSubmit(){
    this.createTask.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate
   });


}
}
