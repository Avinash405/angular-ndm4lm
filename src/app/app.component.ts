import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
  
})
export class AppComponent  {
  
  showOrNoShow:boolean=true;
  employees:Object[]=[
    {EmpID:5000,
    EmpName:"Avinash",
    Location:"Hyderabad"},
     {EmpID:6000,
    EmpName:"Esarajula",
    Location:"Guntur"},
  ];
  
  employeesforPipe:Object[]=[
    {EmpName:"Avinash",
    Age:28,
    },
    {EmpName:"Esarajula",
    Age:28,
    },
    {EmpName:"Aarush",
    Age:2
    },
  ];
 Displaydata(event) {   
      this.showOrNoShow=!this.showOrNoShow;
      
      console.log(event);
   }
   

}
