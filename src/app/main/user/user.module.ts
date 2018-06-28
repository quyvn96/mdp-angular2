import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {Routes,RouterModule} from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
const userRoutes:Routes =[
 {path:'',redirectTo:'index',pathMatch:'full'},
 {path:'index',component:UserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ],
  providers: [DataService, NotificationService],
  declarations: [UserComponent]
})
export class UserModule { }
