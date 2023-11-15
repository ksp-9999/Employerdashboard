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
      this.employeeobj.EmployeeId=1
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
  const isData= localStorage.getItem('EmpData')
    if(isData!=null){
      let localData= JSON.parse(isData)
      localData=localData.filter((emp:any)=>{return emp.EmployeeId!=item.EmployeeId})
      localStorage.setItem("EmpData",JSON.stringify(localData))
      this.getAllEmployees()
    }
}

onSearch(){
  const isData= localStorage.getItem('EmpData')
    if(isData!=null){
      const localData=JSON.parse(isData)
      if(this.sortBy=='Name'){
        const filteredData=localData.filter((m:any)=>{ return (m.FirstName+m.LastName).includes(this.searchText)})
        this.employeeArr=filteredData
      }
      if(this.sortBy=='Technology'){
        const filteredData=localData.filter((m:any)=>{ return m.Technology.includes(this.searchText)})
        this.employeeArr=filteredData
      }
      if(this.sortBy=='Designation'){
        const filteredData=localData.filter((m:any)=>{ return m.Designation.includes(this.searchText)})
        this.employeeArr=filteredData
      }
      if(this.sortBy=='Skill'){
        const filteredData=localData.filter((m:any)=>{ return m.Skill.includes(this.searchText)})
        this.employeeArr=filteredData
      }
      if(this.sortBy=='Core Enterprise'){
        const filteredData=localData.filter((m:any)=>{ return m.Core.includes(this.searchText)})
        this.employeeArr=filteredData
      }
      if(this.sortBy=='Company'){
        const filteredData=localData.filter((m:any)=>{ return m.Company.includes(this.searchText)})
        this.employeeArr=filteredData
      }
    }
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
