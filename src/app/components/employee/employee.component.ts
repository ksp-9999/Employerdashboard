import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeobj:EmployeeObj;
  sortBy:string;
  searchText:string;
  employeeArr:EmployeeObj[];

  constructor(){
    this.employeeobj=new EmployeeObj();
    this.sortBy=''
    this.searchText=''
    this.employeeArr=[]
}

onsave(){
    this.employeeArr.push(this.employeeobj)
  }

}

export class EmployeeObj{
  FirstName:string;
  LastName:string;
  Technology:string;
  Designation:string;
  Skill:string;
  Core:string;
  IsCertification:string;
  CertificationName:string;
  Company:string;
  FewDetails:string;
  constructor(){
    this.FirstName=''
    this.LastName=''
    this.Technology=''
    this.Designation=''
    this.Skill=''
    this.CertificationName=''
    this.Core=''
    this.IsCertification=''
    this.Company=''
    this.FewDetails=''
  }

 
}
