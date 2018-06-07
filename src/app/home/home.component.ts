import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { GeralInternasService } from '../services/geral-internas.service';

import { environment } from '../../environments/environment';

const brasaoBranco = environment.img.brasaoBranco;
@Component({
  selector: 'cb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  abreNoticia = false;
  noticiaContent;
  brasaoBranco = brasaoBranco;

  constructor() {}

  ngOnInit() {}

  abrirNoticia(event) {
    this.abreNoticia = true;
    this.noticiaContent = event;
    if (event.Conteudo2) {
    }
  }
}
