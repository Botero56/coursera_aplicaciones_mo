import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { Matematico, MatematicosService } from '~/app/shared/matematicos.service'

@Component({
  standalone: false,
  selector: 'MatematicoDetalle',
  templateUrl: './matematico-detalle.component.html',
})
export class MatematicoDetalleComponent implements OnInit {
  matematico: Matematico | undefined

  constructor(
    private route: ActivatedRoute,
    public matematicosService: MatematicosService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.matematico = this.matematicosService.getById(this.route.snapshot.params.id)
  }

  onFavoritoTap(): void {
    if (this.matematico) this.matematicosService.toggleFavorito(this.matematico.id)
  }

  onBackTap(): void {
    this.routerExtensions.back()
  }
}
