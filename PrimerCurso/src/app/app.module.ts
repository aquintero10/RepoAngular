import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { OneServiceService } from './one-service.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [OneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
