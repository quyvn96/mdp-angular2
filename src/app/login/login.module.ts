import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
export const routers:Routes = [
    {path:'',component:LoginComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routers)
  ],
  providers:[AuthenService,NotificationService],  
  declarations: [LoginComponent]
})
export class LoginModule { }
