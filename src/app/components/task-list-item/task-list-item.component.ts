import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  TaskItems = input.required<TaskItem>();
  statusValues = ["Todo", "InProgress", "Completed"]
  taskService = inject(TaskService)

  action = computed(()=>{
    const taskItemValue = this.TaskItems();
    
    return this.statusValues.filter(x => taskItemValue.status !== x)
  })

  markAs(text: string, updatedStatus:string){
    this.taskService.markAsStatus(text, updatedStatus)
  }
}
