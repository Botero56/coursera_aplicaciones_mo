# Bernoulli & Euler: app NativeScript + Angular

App móvil hecha con NativeScript y Angular, a partir de la plantilla oficial
[`template-drawer-navigation-ng`](https://github.com/NativeScript/template-drawer-navigation-ng)
(paquete `@nativescript/template-drawer-navigation-ng@9.1.2`). Usa el mismo contenido de la
página web del proyecto, que está en [`files/`](files/index.html).

## Ejecutar

```bash
npm install
ns run android   # o: ns run ios
```

## Dónde se cumple cada punto de la consigna

| # | Requisito | Dónde |
|---|-----------|-------|
| 1 | Basado en la plantilla drawer-navigation-ng, con enrutador modularizado por features | [`src/app/app-routing.module.ts`](src/app/app-routing.module.ts) con `loadChildren` (home, browse, search, featured, settings, matematicos) |
| 2 | Al menos 2 componentes nuevos | [`MatematicosListComponent`](src/app/matematicos/matematicos-list/matematicos-list.component.ts) y [`MatematicoDetalleComponent`](src/app/matematicos/matematico-detalle/matematico-detalle.component.ts) |
| 3 | Módulo de features nuevo | [`src/app/matematicos/matematicos.module.ts`](src/app/matematicos/matematicos.module.ts) |
| 4 | Submódulo de ruteo del nuevo módulo | [`matematicos-routing.module.ts`](src/app/matematicos/matematicos-routing.module.ts) con las rutas `''` (lista) y `':id'` (detalle) |
| 5 | Navegación integrada al side drawer existente | Ítem **Matemáticos** en [`app.component.html`](src/app/app.component.html) y ruta lazy `matematicos` |
| 6 | Service de Angular nuevo, inyectado de forma global | [`MatematicosService`](src/app/shared/matematicos.service.ts) con `providedIn: 'root'`. Lo inyectan `AppComponent` (contador de favoritos en el drawer) y los dos componentes nuevos, y todos comparten la misma instancia |
| 7 | Vista con `ngFor` | [`matematicos-list.component.html`](src/app/matematicos/matematicos-list/matematicos-list.component.html) (lista de matemáticos) y [`matematico-detalle.component.html`](src/app/matematicos/matematico-detalle/matematico-detalle.component.html) (aportes) |
| 8 | CSS con sobrecarga de nombres para Android e iOS | [`matematicos-list.component.android.css`](src/app/matematicos/matematicos-list/matematicos-list.component.android.css) y [`matematicos-list.component.ios.css`](src/app/matematicos/matematicos-list/matematicos-list.component.ios.css). El componente referencia `./matematicos-list.component.css` y webpack resuelve el archivo de cada plataforma |
| 9 | Ícono personalizado en App_Resources | Lemniscata `res://lemniscata` en `App_Resources/Android/src/main/res/drawable-*/lemniscata.png` y `App_Resources/iOS/Assets.xcassets/lemniscata.imageset`, mostrada en el encabezado del drawer. También se cambió el ícono de la app (`mipmap-*/ic_launcher.png`, `ic_launcher_foreground.xml` y `AppIcon.appiconset`) |
| 10 | Código TypeScript que asigna un valor solo en Android | [`matematicos-list.component.ts`](src/app/matematicos/matematicos-list/matematicos-list.component.ts): `if (isAndroid) { this.plataforma = ... }` |
