import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';
import { LinkComponent } from './link/link.component';
import { RangeFieldComponent } from './range-field/range-field.component';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    ButtonsComponent,
    LinkComponent,
    RangeFieldComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ], exports: [
    // ... other components
    ToasterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
