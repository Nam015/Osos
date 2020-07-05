import { Todo, Day } from './todo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class TodoService {
  private todo: Todo[] = [
    {
      id: 0,
      day: 1,
      task: 'Todo Task 1',
      completed: true,
    },
    { id: 1, day: 2, task: 'Todo Task 2', completed: false },
    {
      id: 2,
      day: 3,
      task: 'Todo Task 3',
      completed: false,
    },
    {
      id: 3,
      day: 1,
      task: 'Todo Task 4',
      completed: false,
    },

    { id: 4, day: 1, task: 'Todo Task 5', completed: false },
    {
      id: 5,
      day: 3,
      task: 'Todo Task 6',
      completed: false,
    },
    {
      id: 6,
      day: 1,
      task: 'Todo Task 7',
      completed: false,
    },

    {
      id: 7,
      day: 2,
      task: 'Todo Task 8',
      completed: false,
    },
    {
      id: 8,
      day: 3,
      task: 'Todo Task 9',
      completed: false,
    },
    {
      id: 9,
      day: 2,
      task: 'Todo Task 10',
      completed: false,
    },
    {
      id: 10,
      day: 1,
      task: 'Todo Task 11',
      completed: false,
    },
    {
      id: 11,
      day: 2,
      task: 'Todo Task 12',
      completed: false,
    },
  ];

  private days: Day[] = [{ day: 1 }, { day: 2 }, { day: 3 }];

  taskByDay: Todo[];

  getDayList(): Observable<any> {
    return of(this.days);
  }
  getTaskList(): Observable<Todo[]> {
    return of(this.todo);
  }
  getTaskByDay(day: number): Observable<Todo[]> {
    this.taskByDay = this.todo.filter(function (et) {
      return et.day == day;
    });
    return of(this.taskByDay);
  }
  addDay(lastDay) {
    console.log(this.todo);
    // this.newDay.day = lastDay + 1;

    this.days.push({
      day: lastDay + 1,
    });
    // console.log(this.todo);
  }

  addTask(day, task) {
    // console.log(this.todo);
    // this.newDay.day = lastDay + 1;

    this.todo.push({
      id: this.todo.length + 1,
      day: day,
      task: task,
      completed: false,
    });
    // console.log(this.todo);
  }

  taskComplete(id: number) {
    const foundIndex = this.todo.findIndex((e) => e.id === id);
    this.todo[foundIndex].completed = true;
  }
  taskUndo(id: number) {
    const foundIndex = this.todo.findIndex((e) => e.id === id);
    this.todo[foundIndex].completed = false;
  }

  delete(id: number) {
    const foundIndex = this.todo.findIndex((e) => e.id === id);
    this.todo.splice(foundIndex, 1);
  }

  lastIndex() {
    return this.todo.length;
  }
}
