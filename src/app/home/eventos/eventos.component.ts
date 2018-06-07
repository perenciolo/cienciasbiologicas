import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

import { GeralInternasService } from '../../services/geral-internas.service';

const eventosAPI = environment.eventosAPI;

@Component({
  selector: 'cb-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.sass']
})
export class EventosComponent implements OnInit {
  eventos;

  constructor(private geralInternasService: GeralInternasService) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.geralInternasService.getAPI(eventosAPI);
    this.geralInternasService.getEventos().subscribe(res => {
      if (res.length) {
        this.eventos = res;
        // .filter((element, index) => index < 5);
      } else {
        this.eventos = false;
      }
    });
  }
}
