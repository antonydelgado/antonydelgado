import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './models/todo.models';
import {filtrosVarios} from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: filtrosVarios): Todo[] {
    console.log(filtro);
    switch (filtro) {
      case 'todos':
        return value;
      case 'completados':
        return value.filter(x => x.completado);
      case 'varios':
        return value.filter(x => !x.completado);
    }
    return value;
  }

}
