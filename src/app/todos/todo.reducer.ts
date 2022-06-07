import {Action, createReducer, on} from '@ngrx/store'
import {cleanComplete, crear, editar, eliminar, toggle, toggleAll} from './todo.actions';
import {Todo} from './models/todo.models';


export const estadoInicial: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Rescatar la princesa"),
  new Todo("Perder la casa"),
  new Todo("No ver a los hijos"),
];

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(cleanComplete, (state) => {
    return state.filter(x => x.completado)
  }),
  on(toggleAll, (state, {complete}) => state.map(todo => {
    return {
      ...todo,
      completado: complete
    }
  })),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map((todo => {
      if (todo.id === id) {
        return {...todo, texto: texto};
      } else {
        return todo;
      }
    }));
  }),
  on(eliminar, (state, {id}) => {
    return state.filter(todo => todo.id !== id);
  })
)

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
