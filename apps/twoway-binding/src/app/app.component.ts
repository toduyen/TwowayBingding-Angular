import {Component, ElementRef, ViewChild} from '@angular/core';
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'twoway-binding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twoway-binding';
  @ViewChild('ToggleComponent') ToggleComponent?:ToggleComponent;
  @ViewChild('inputnha') inputnha?:ElementRef<HTMLInputElement>;
  submitCircle(){
    this?.ToggleComponent?.toggle()
  }
  ngOnInit(){
    setTimeout(() => {
      this.inputnha?.nativeElement.focus()
    },7000)
  }
}
