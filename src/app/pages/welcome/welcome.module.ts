import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NgZorroAntModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  imports: [
    WelcomeRoutingModule, 
    NgZorroAntModule, 
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
