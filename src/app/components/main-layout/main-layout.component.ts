import { Component, input, output } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-main-layout',
  imports: [MainComponent, AsideComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  seccionActual = input<string>('resumen');
  seccionCercana = output<string>();
  manejarSeleccion(seccion: string): void {
    this.seccionCercana.emit(seccion);
  }
}
