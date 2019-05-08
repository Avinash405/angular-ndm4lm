import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDirectiveDirective } from './app-directive.directive';
import { EmpDetailsPipe } from './emp-details.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  AppDirectiveDirective, EmpDetailsPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
