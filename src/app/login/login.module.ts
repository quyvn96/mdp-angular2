import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
export const routers:Routes = [
    {path:'',component:LoginComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
