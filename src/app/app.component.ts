import { Component, computed, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskServices = inject(TaskService);

  private tasks = this.taskServices.tasks;

  todoItems = computed(()=>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === "Todo")
  })
  inProgressItems = computed(()=>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === "InProgress")
  })
  completedItems = computed(()=>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === "Completed")
  })
}
