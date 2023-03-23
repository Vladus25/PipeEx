import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCase'
})
export class LowerCasePipe implements PipeTransform {

  transform(films: any[]): any[] {
    if (!Array.isArray(films)) {
      return films;
    }
    return films.map((item) => {
      const newItem = { ...item }; // Clona l'oggetto originale
      newItem.titolo = newItem.titolo.toLowerCase();
      return newItem;
    });
  }

}
