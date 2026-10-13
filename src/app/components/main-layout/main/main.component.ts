import { Component, input } from '@angular/core';

export interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  periodo: string;
  descripcion: string;
}

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  seccion = input<string>('resumen');

  sobreMiTitulo = 'SOBRE MÍ';
  sobreMi =
    'Estudiante de segundo año de DAM. Apasionado por las nuevas tecnologías y amante de la informática';

  experienciaTitulo = 'EXPERIENCIA LABORAL';
  experiencias: Experiencia[] = [
    {
      id: 1,
      empresa: 'Accenture',
      puesto: 'Alumno en prácticas',
      periodo: 'Mayo 2026 - Junio 2026',
      descripcion: 'Alumno en proceso de prácticas, adquiriendo conocimientos sobre desarrollo de software a través de cursos, charlas y asesoramiento profesional'
    },
    {
      id: 2,
      empresa: 'Decathlon',
      puesto: 'Vendedor deportivo',
      periodo: 'Abril 2025 - Agosto 2025 y Junio 2026 - Agosto 2026',
      descripcion: 'Vendedor y asesor de material deportivo en la sección de deportes de montaña y camping. Control de stock y cobro en cajas.'
    }
  ];

  formacionTitulo = 'FORMACIÓN';
  formacion = 'Estudiante Grado Superior Desarrollo de Aplicaciones Multiplataforma';
  centroFormacion = 'CPIFP Alan Turing';

  tecnologiasTitulo = 'TECNOLOGÍAS';
  tecnologias = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'Python',
    'SQL',
  ];
  tecnologiaSeleccionada: string | null = null;

  seleccionarTecnologia(tech: string): void {
    this.tecnologiaSeleccionada = tech;
  }
}
