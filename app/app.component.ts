import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

// set Input/Output for child component in AC decorator: Step #6
  // taskList is info passed to the child, from the parent
  // onTaskSelect is info emitted from the child, passed to the parent
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <div class="container">
    <h1>To-Do List</h1>
    <task-list
      [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
    </task-list>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[]; // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn kung fu.", 1),
      new Task("Do interesting stuff.", 3),
      new Task("Write about interesting stuff.", 2)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask, "from parent");
  }
}
