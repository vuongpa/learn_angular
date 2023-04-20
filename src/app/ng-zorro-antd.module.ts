import { NgModule } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzInputModule } from "ng-zorro-antd/input"

@NgModule({
  exports: [
    NzButtonModule,
    NzInputModule
  ]
})
export class NgZorroAntModule {}