import { KnowledgeComponent } from './../../components/knowledge/knowledge.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
