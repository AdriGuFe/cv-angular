import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage, HeaderComponent, FooterComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  seccionActiva: string = 'resumen';
  cambiarSeccion(nuevaSeccion: string): void {
    this.seccionActiva = nuevaSeccion;
  }
}
