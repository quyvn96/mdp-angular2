import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PersonComponent } from './person/person.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [UtilityService,AuthenService],
  declarations: [MainComponent, PersonComponent]
})
export class MainModule { }
