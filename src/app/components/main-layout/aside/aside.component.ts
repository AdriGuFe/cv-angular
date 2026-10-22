import { NgOptimizedImage } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [NgOptimizedImage],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  contacto = 'CONTACTO';
  ciudad = 'Málaga';
  telefono = '695 04 47 43';
  email = 'adrian.gutierrez.fdez@gmail.com';
  github = 'AdriGuFe';
  idiomas = 'Español e Inglés';
  nombre = 'Adrian';
  apellidos = 'Gutierrez Fernandez';
  fotoPerfil = '/../../fotoPerfil.jpg';

  mostrarContacto: boolean = true;
  
  seccionSeleccionada = output<string>();

  toggleContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }

  seleccionar(seccion: string): void {
    this.seccionSeleccionada.emit(seccion);
  }
}
