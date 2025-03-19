import { Injectable } from '@angular/core';
import { NewTask } from '../tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks= [
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
  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks=JSON.parse(tasks);
    }
  }
  getTasks(userId:string){
    return this.tasks.filter((task) =>task.userId===userId);
  }

  addTask(task:NewTask,userId:string){
    this.tasks.push({
      id:Math.random().toString(),
      userId:userId,
      title:task.title,
      summary:task.summary,
      dueDate:task.dueDate
    });
    this.saveTasks();
  }
  removeTask(id:string){
    this.tasks=this.tasks.filter((task)=>task.id!==id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
