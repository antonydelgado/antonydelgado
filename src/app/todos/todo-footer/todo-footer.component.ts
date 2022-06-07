import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import {filtrosVarios} from '../../filtro/filtro.actions';
import {cleanComplete} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosVarios = 'todos';
  filtros: actions.filtrosVarios[] = ['todos', 'completados', 'varios'];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  cambiarFiltro(filtro: filtrosVarios) {
    this.filtroActual = filtro;
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  limpiarCompletados() {
    this.store.dispatch(cleanComplete());
  }
}
