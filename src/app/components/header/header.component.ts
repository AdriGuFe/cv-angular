import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'cv';
  nombre = 'Adrian';
  apellidos = 'Gutierrez Fernandez';
  puesto = 'Desarrollador de aplicaciones multiplataforma';
}
