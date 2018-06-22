import { Component,AfterViewChecked,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  constructor(private elementDef:ElementRef){

  }
  ngAfterViewChecked(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src= "../assets/js/custom.js";
    this.elementDef.nativeElement.appendChild(s);
  }
}
