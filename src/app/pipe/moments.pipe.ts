import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';
import * as moment from 'moment';

@Pipe({
  name: 'moments'
})
export class MomentsPipe implements PipeTransform {

  constructor(){
    moment.locale("it");
  }

  transform(value:string | Date | moment.Moment, formato:string) :any {
    return moment(value).format(formato);
  }

}
