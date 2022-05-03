import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( array: any[], 
             text: string = '',
             column: string = 'title'
             ): any[] {
  
    if ( text === ''  || text === undefined) {
      return array;
    }

    if ( !array ) {
      return array;
    }

    text = text.toLowerCase();

    return array.filter(
      item => item[column].toLowerCase().includes( text )
     );

  }

}
