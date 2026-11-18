import { Injectable } from '@angular/core'

export interface Matematico {
  id: string
  nombre: string
  vida: string
  resumen: string
  aportes: string[]
}

// providedIn: 'root' -> una sola instancia para toda la app (inyección global).
// El drawer (AppComponent) y las vistas del módulo Matemáticos comparten los favoritos.
@Injectable({ providedIn: 'root' })
export class MatematicosService {
  private readonly matematicos: Matematico[] = [
    {
      id: 'jacob',
      nombre: 'Jacob Bernoulli',
      vida: 'Basilea, 1655 – 1705',
      resumen: 'Estudió el azar y las curvas. Pidió una espiral logarítmica en su tumba.',
      aportes: [
        'Ley de los grandes números (Ars Conjectandi, 1713)',
        'Lemniscata (1694)',
        'Aproximó el número e con el interés compuesto (1683)',
      ],
    },
    {
      id: 'johann',
      nombre: 'Johann Bernoulli',
      vida: 'Basilea, 1667 – 1748',
      resumen: 'Hermano menor de Jacob y maestro de Euler.',
      aportes: ['Problema de la braquistócrona (1696)', 'Difusión del cálculo de Leibniz'],
    },
    {
      id: 'daniel',
      nombre: 'Daniel Bernoulli',
      vida: 'Groninga, 1700 – 1782',
      resumen: 'Hijo de Johann; llevó las matemáticas a los fluidos.',
      aportes: ['Hydrodynamica (1738)', 'Principio de Bernoulli'],
    },
    {
      id: 'euler',
      nombre: 'Leonhard Euler',
      vida: 'Basilea, 1707 – 1783',
      resumen: 'Reescribió el lenguaje de las matemáticas.',
      aportes: [
        'Identidad de Euler: e^(iπ) + 1 = 0',
        'Puentes de Königsberg y nacimiento de la teoría de grafos (1736)',
        'Notación f(x), e, i, π y Σ',
      ],
    },
  ]

  private readonly favoritos = new Set<string>()

  getAll(): Matematico[] {
    return this.matematicos
  }

  getById(id: string): Matematico | undefined {
    return this.matematicos.find((m) => m.id === id)
  }

  esFavorito(id: string): boolean {
    return this.favoritos.has(id)
  }

  toggleFavorito(id: string): void {
    if (!this.favoritos.delete(id)) this.favoritos.add(id)
  }

  get totalFavoritos(): number {
    return this.favoritos.size
  }
}
