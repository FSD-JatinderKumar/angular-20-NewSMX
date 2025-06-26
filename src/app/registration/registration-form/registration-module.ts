// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class RegistrationModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationForm } from './registration-form';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RegistrationForm }
];

@NgModule({
  declarations: [RegistrationForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
