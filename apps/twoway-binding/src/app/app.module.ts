import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ToggleComponent } from './toggle/toggle.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ToggleComponent],
    imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
