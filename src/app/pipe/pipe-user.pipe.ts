import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUser'
})
export class PipeUserPipe implements PipeTransform {

  transform(utenti: any[], age: number): any[] {
    if (!Array.isArray(utenti)) {
      return utenti;
    }
    return utenti.filter(utenti => utenti.eta === age);
  }

}
