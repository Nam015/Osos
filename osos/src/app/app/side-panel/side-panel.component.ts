import { UniqDayPipe } from './../uniq-day.pipe';
import { TodoService } from './../ososService';
import { Todo, Day } from './../todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {
  daySelected = false;
  newTask: string;
  taskList: Todo[];
  taskOfDay: Todo[];
  selectedDay: number;
  days: Day[];
  displayedColumns: string[] = ['task', 'status', 'delete'];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getDayList().subscribe((list) => {
      this.days = list;
      //console.log(this.days);
    });
  }

  showTask(day: number) {
    this.selectedDay = day;
    this.daySelected = true;
    this.todoService.getTaskByDay(day).subscribe((list) => {
      this.taskOfDay = list;
    });
  }
  addDay(lastDay) {
    this.todoService.addDay(lastDay);
  }
  taskComplete(taskId: number) {
    this.todoService.taskComplete(taskId);
  }
  taskUndo(taskId: number) {
    this.todoService.taskUndo(taskId);
  }
  taskDelete(taskId: number, day: number) {
    this.todoService.delete(taskId);
    this.showTask(day);
  }
  addTask(day: number) {
    if (this.newTask)
    {
    this.todoService.addTask(day, this.newTask);
    console.log(this.newTask);
    this.newTask = null;
    this.showTask(day);
    }
  }
}
