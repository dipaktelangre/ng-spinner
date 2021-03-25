import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSpinnerComponent } from './ng-spinner.component';

export { NgSpinnerSettings } from './ng-spinner.model';

@NgModule({
  declarations: [NgSpinnerComponent],
  imports: [BrowserModule],
  exports: [NgSpinnerComponent],
})
export class NgSpinnerModule {}
