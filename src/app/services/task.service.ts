import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = signal<TaskItem[]>([])

  addTask(task: string, status: string){
    this.tasks.update((previousState)=>{
      return[...previousState, {task, status}]
    })
  }

  markAsStatus(text: string, updatedStatus: string){
    this.tasks.update((existingStatus)=>{
      const findTask = existingStatus.find(x => x.task === text);

      if (findTask){
        return[...existingStatus.filter(x => x.task !== text), {task: text, status: updatedStatus}]
      } else {
        return existingStatus;
      }
    })
  }
}
 