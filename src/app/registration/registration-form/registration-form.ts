import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.html',
  standalone:false,
  styleUrl: './registration-form.scss',
})
export class RegistrationForm {
  showTable: boolean= true;


  ReloadData(dd:any){

  }

}
