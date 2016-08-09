import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  output: ['onSubmitNewTask'],
  template:`
    <h4>Blank Task Template</h4>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Task>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
}
