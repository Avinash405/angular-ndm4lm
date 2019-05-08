import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empDetails'
})
export class EmpDetailsPipe implements PipeTransform {

  transform(param: Object[]): Object[] {

    let empdetailitem= [];
    for (let i; i < param.length; i++) {
      if (param[i]['Age'] > 18) {
        empdetailitem.push(param[i]['Age'])
      }

    }
return empdetailitem;

  }

}