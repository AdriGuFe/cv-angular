import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  sobreMiTitulo = 'SOBRE MÍ';
  sobreMi =
    'Estudiante de segundo año de DAM. Apasionado por las nuevas tecnologías y amante de la informática';

  //Experiencia
  experienciaTitulo = 'EXPERIENCIA LABORAL';
  //Experiencia 1
  empresa1 = 'Accenture';
  puesto1 = 'Alumno en prácticas';
  periodo1 = 'Mayo 2026 - Junio 2026';
  descripcion1 =
    'Alumno en proceso de prácticas, adquiriendo conocimientos sobre desarrollo de software a través de cursos, charlas y asesoramiento profesional';
  //Experiencia 2
  empresa2 = 'Decathlon';
  puesto2 = 'Vendedor deportivo';
  periodo2 = 'Abril 2025 - Agosto 2025 y Junio 2026 - Agosto 2026';
  descripcion2 =
    'Vendedor y asesor de material deportivo en la sección de deportes de montaña y camping. Control de stock y cobro en cajas.';
  //Formacion
  formacionTitulo = 'FORMACIÓN';
  formacion =
    'Estudiante Grado Superior Desarrollo de Aplicaciones Multiplataforma';
  centroFormacion = 'CPIFP Alan Turing';
  //Tecnologias
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
}
