import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask=false;
  tasks= [
    {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summary:'Learn Angular',
      dueDate:'2025-12-31'
    },
    {
      id:'t2',
      userId:'u3',
      title:'Master Angular',
      summary:'Learn Angular',
      dueDate:'2025-12-31'
    },
    {
      id:'t3',
      userId:'u3',
      title:'Master Angular',
      summary:'Learn Angular',
      dueDate:'2025-12-31'
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) =>task.userId===this.userId);
  }
  onCompleteTask(id:string){
    this.tasks=this.tasks.filter((task)=>task.id!==id);
  }
  onStartAddTask(){
    this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
  }
  onCreateTask(tasks:NewTask){
    this.tasks.push({
      id:Math.random().toString(),
      userId:this.userId,
      title:tasks.title,
      summary:tasks.summary,
      dueDate:tasks.dueDate
    });
    this.isAddingTask=false;
  }
}
