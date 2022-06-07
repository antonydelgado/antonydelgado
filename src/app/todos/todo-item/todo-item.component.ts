import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.models';
import {FormControl, Validators} from '@angular/forms';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import * as acctions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo("");
  editando: boolean;
  texto:string = "";
  @ViewChild("inputFisico") txtInputFisico: ElementRef = new ElementRef<any>("");

  constructor(private store: Store<AppState>) {
   // this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.store.select('todos').subscribe(todos => {
    });
    this.editando = false;
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.store.dispatch(acctions.toggle({id: this.todo.id}));
  }

  terminarEdicion() {

    this.editando = false;
    this.store.dispatch(acctions.editar({id: this.todo.id, texto: this.texto}));
  }

  eliminar() {
    this.store.dispatch(acctions.eliminar({id: this.todo.id}));
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }
}
