import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskServices = inject(TaskService)

  taskForm = new FormGroup({
    task: new FormControl('',{
      nonNullable: true
    }),
    status: new FormControl('Todo', {
      nonNullable: true
    })
  })

  onSubmit(){
    const rawValue = this.taskForm.getRawValue();
    this.taskServices.addTask(rawValue.task, rawValue.status);

    this.taskForm.reset();
  }
}
