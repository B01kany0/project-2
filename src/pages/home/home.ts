import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tasks } from './tasks';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employ = new Array();
  name:string;
  surname:string;
  identity:string;
  employee:string;

  addemploy=function(name,surname,identity,employee){
    let objectEm = new Tasks(name,surname,identity,employee)


    if( objectEm !=null)
    {
      this.employ.push(objectEm);
      console.log(objectEm);
    }

}
delete(b)
  {
    this.employ.splice(this.employ.indexOf(b),1,);
  
  }


  


  
  updateEmployee = function(b,name,surname,identity,employee){

    let newName =this.listEmployee[b].name;
    let newSurname=this.listEmployee[b].surname;
    let newRole = this.listEmployee[b].role;
    let newId = this.listEmployee[b].id;

   if(name != '' && name!= null && surname != ''  && surname != null && identity != ''  && employee != null && identity != ''  && identity != null )
    {
        let objct= new employee(name,surname,identity,employee);
        this.listEmployee.splice(b,1,objct);
        console.log(objct);
    }
    else if(name != '' && surname!= null && surname != ''  && surname != null && employee != ''  && employee != null)
    {

      let objct= new employee(name,surname,identity,employee);
      this.listEmployee.splice(b,1,objct);
      console.log(objct);
    }
    else if(name != '' && name!= null && surname != ''  && name != null && identity!= ''  && identity != null )
    {

      let objct= new employee(name,surname,identity,employee);
      this.listEmployee.splice(b,1,objct);
      console.log(objct);
    }
    else if(name != '' && name!= null && identity != ''  && identity != null  && employee != ''  && employee != null)
    {

      let objct= new employee(name,newSurname,identity,employee);
      this.listEmployee.splice(b,1,objct);
      console.log(objct);
    }
    else if( surname != ''  && surname != null && employee != ''  && employee != null && identity != ''  && identity != null )
    {

      let objct= new employee(newName,surname,identity,employee);
      this.listEmployee.splice(b,1,objct);
      console.log(objct);


    }
    }
    constructor(public navCtrl: NavController) {
    {

    }
    }
  }
