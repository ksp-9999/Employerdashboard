import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  @ViewChild('form') form!: NgForm;
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
ngOnInit(): void {
  this.getAllEmployees()
}
onsave(form:any){
    const isData= localStorage.getItem('EmpData')
    if(isData==null)
    {
      const newArr=[]
      this.employeeobj.EmployeeId=0
      newArr.push(this.employeeobj)
      localStorage.setItem("EmpData",JSON.stringify(newArr))
      this.getAllEmployees()
    } else{
      const oldData=JSON.parse(isData)
      const newId=oldData.length+1
      this.employeeobj.EmployeeId=newId
      oldData.push(this.employeeobj)
      localStorage.setItem("EmpData",JSON.stringify(oldData))
      this.getAllEmployees()
    }
      this.resetForm()
  }

  getAllEmployees(){
    const isData= localStorage.getItem('EmpData')
    if(isData!=null){
      const localData=JSON.parse(isData)
      this.employeeArr=localData
    }
  }

  resetForm() {
  this.form.resetForm(); // Reset the form
}

onEdit(item: EmployeeObj){
this.employeeobj=item
}
onDel(item: EmployeeObj){
  debugger
  const isData= localStorage.getItem('EmpData')
    if(isData!=null){
      const localData= JSON.parse(isData)
      for (let index = 0; index < localData.length; index++) {
        if(localData[index].EmployeeId==item.EmployeeId){
          localData.splice(0,1)
          this.getAllEmployees()
          break
        }
      }
      localStorage.setItem("EmpData",JSON.stringify(localData))
      this.getAllEmployees()
    }
}

onSearch(){
  
}





}

export class EmployeeObj{
  EmployeeId:number
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
    this.EmployeeId=0
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
