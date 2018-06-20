import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PersonComponent } from './person/person.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent, PersonComponent]
})
export class MainModule { }
