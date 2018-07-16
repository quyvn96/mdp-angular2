import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { UploadService } from '../../core/services/upload.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { Daterangepicker } from 'ng2-daterangepicker';
const userRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: UserComponent }
]
@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    MultiselectDropdownModule,
    Daterangepicker,
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ],
  providers: [DataService, NotificationService,UploadService],
  declarations: [UserComponent]
})
export class UserModule { }
