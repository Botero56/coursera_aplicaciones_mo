import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application, Device, isAndroid } from '@nativescript/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { Matematico, MatematicosService } from '~/app/shared/matematicos.service'

@Component({
  standalone: false,
  selector: 'MatematicosList',
  templateUrl: './matematicos-list.component.html',
  // Se resuelve a matematicos-list.component.android.css o .ios.css según la plataforma.
  styleUrls: ['./matematicos-list.component.css'],
})
export class MatematicosListComponent implements OnInit {
  matematicos: Matematico[] = []
  plataforma = 'iOS'

  constructor(public matematicosService: MatematicosService, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.matematicos = this.matematicosService.getAll()

    // Solo en Android se asigna este valor (nivel de API del dispositivo).
    if (isAndroid) {
      this.plataforma = `Android (API ${Device.sdkVersion})`
    }
  }

  onItemTap(m: Matematico): void {
    this.routerExtensions.navigate(['/matematicos', m.id], { transition: { name: 'slide' } })
  }

  onDrawerButtonTap(): void {
    ;(<RadSideDrawer>Application.getRootView()).showDrawer()
  }
}
