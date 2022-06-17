import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MaterialComponents=[
  MatExpansionModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
