import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, PersonComponent]
})
export class MainModule { }
