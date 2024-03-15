import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Front-end',
        p: 'GFT Technologies | Out 2021 - Present',
      },
      text: '<p>Desenvolvedor Front-end usando Angular</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-end',
        p: 'Nine Coders | Mai 2020 - Out 2020',
      },
      text: '<p>Desenvolvedor Front-end com experiência no desenvolvimento web usando o Angular consumindo Api, e no desenvolvimento mobile usando o Ionic.</p><p>Trabalhos realizados plataforma web desenvolvida em Angular</p><p>http://app.deedhunter.com/login.</p><p>App mobile desenvolvido com Ionic</p><p>https://play.google.com/store/apps/detailsid=com.deedhunter.app&hl=pt_BR</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-end',
        p: 'Sete Solução Digitais | Mai 2018 - Mai 2020',
      },
      text: '<p>Executando manutenção de sites e desenvolvimento de aplicações web, produção de layout do website, ou produto digital e atuando de forma integrada com as áreas de design e back-end.</p>',
    },
  ]);
}
