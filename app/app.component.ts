import { Component, EventEmitter } from 'angular2/core';
// Custom Event Emitter set up starts here: Step #1
// set up output for CEE: Step #2
  // input, output, and directives wrapped in []

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  template: `
  <h3 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
      {{ currentTask.description }}
  </h3>
  `
})
// specify data type of CEE object in child component class declarataion: Step #3
// set constructor to instantiate: Step #4
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  // build emit method to ctrl when to send call to parent: Step #5
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask, "from child");
    this.onTaskSelect.emit(clickedTask);
  }
}

// set Input/Output for child component in AC decorator: Step #5
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

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
