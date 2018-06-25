import { OperatorComponent } from './modules/operator/operator.component';
import { StudentComponent } from './modules/student/student.component';
import { AdminComponent } from './modules/admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'student', component: StudentComponent},
  {path: 'operator', component: OperatorComponent},
  {path: '', redirectTo : '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing : true})
  ],
  declarations: []
})
export class AppRoutingModule { }
