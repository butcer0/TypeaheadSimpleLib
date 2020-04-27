import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {TypeaheadSimpleDirective} from "./directives";

@NgModule({
  declarations: [TypeaheadSimpleDirective],
  imports: [HttpClientModule],
  exports: [TypeaheadSimpleDirective]
})
export class TypeaheadSimpleModule { }
