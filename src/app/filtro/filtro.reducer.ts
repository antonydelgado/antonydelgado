import {Action, createReducer, on} from '@ngrx/store';
import { filtrosVarios, setFiltro} from './filtro.actions';


export const initialState: filtrosVarios = 'todos';

const _filtroReducer = createReducer<filtrosVarios>(
  initialState,
  on(
    setFiltro,
    (state, {filtro}) => filtro
  )
);

export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}
