import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MatematicosListComponent } from './matematicos-list/matematicos-list.component'
import { MatematicoDetalleComponent } from './matematico-detalle/matematico-detalle.component'

// Submódulo de ruteo del feature: /matematicos y /matematicos/:id
const routes: Routes = [
  { path: '', component: MatematicosListComponent },
  { path: ':id', component: MatematicoDetalleComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class MatematicosRoutingModule {}
