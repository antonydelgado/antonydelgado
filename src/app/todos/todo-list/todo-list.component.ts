import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo.models';
import {AppState} from '../../app.reducer';
import { Store } from '@ngrx/store';
import {filtrosVarios} from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual:filtrosVarios = 'varios';
  constructor(private store:Store<AppState>) {
    this.store.select('filtro').subscribe(filtro => {
      this.filtroActual = filtro;
    });

    this.store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit(): void {
  }

}
