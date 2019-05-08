import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empDetails'
})
export class EmpDetailsPipe implements PipeTransform {

  transform(param: string): string {
    param = "Avinash E";
    //let empdetailitem:Object[];
    //for (let i; i < param.length; i++) {
    //if (param[i]['Age'] > 18) {
    // empdetailitem.push(param[i]['EmpName'],param[i]['Age'])
    //}

    //}
    return param;

  }

}