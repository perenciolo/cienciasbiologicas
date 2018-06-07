import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GeralInternasService } from '../../services/geral-internas.service';
import { environment } from '../../../environments/environment';

const noticiasAPI = environment.noticiasAPI;

@Component({
  selector: 'cb-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.sass']
})
export class NoticiasComponent implements OnInit {
  @Output() noticiaClicada: EventEmitter<any> = new EventEmitter();
  noticias;

  constructor(private geralInternasService: GeralInternasService) {}

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    const vm = this;
    this.geralInternasService.getAPI(noticiasAPI);
    this.geralInternasService.getNoticias().subscribe(res => {
      // filter((element, index) => index < 3)
      if (res.length) {
        this.noticias = res;
      } else {
        this.noticias = false;
      }
    });
  }

  getNoticiaById(id) {
    this.geralInternasService.getAPI(noticiasAPI);
    this.geralInternasService.getNoticias().subscribe(res => {
      const noticia = res.filter(element => element.ID === id);
      this.noticiaClicada.emit(noticia[0]);
    });
  }

  clicada(noticiaID) {
    this.getNoticiaById(noticiaID);
  }
}
