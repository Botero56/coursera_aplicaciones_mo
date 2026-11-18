import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { MatematicosRoutingModule } from './matematicos-routing.module'
import { MatematicosListComponent } from './matematicos-list/matematicos-list.component'
import { MatematicoDetalleComponent } from './matematico-detalle/matematico-detalle.component'

@NgModule({
  imports: [NativeScriptCommonModule, MatematicosRoutingModule],
  declarations: [MatematicosListComponent, MatematicoDetalleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MatematicosModule {}
