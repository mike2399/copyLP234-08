import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datum'
})
export class DatumPipe implements PipeTransform {

  transform(datum: string): string {
    var allDate = datum.split('T');
    return allDate[0];
  }

}
