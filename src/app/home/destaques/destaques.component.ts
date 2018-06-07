import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { GeralInternasService } from '../../services/geral-internas.service';

import { environment } from '../../../environments/environment';

const bannerAPI = environment.bannerAPI;
const chevL = environment.img.chevL;
const chevR = environment.img.chevR;

@Component({
  selector: 'cb-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.sass']
})
export class DestaquesComponent implements OnInit, OnDestroy {
  extData = null;
  bannerSet = [];
  dadosSet = { texts: [], images: [] };
  dados;
  images: any[];
  texts: any[];
  currentNumber = 0;
  timer = null;
  noticias = [];
  eventos = [];
  noticiaImgPathReturned = null;
  componentDestroyed$: Subject<boolean> = new Subject();
  leiaMais = false;
  noticia;
  show;
  chevL = chevL;
  chevR = chevR;

  constructor(private geralInternasService: GeralInternasService) {}

  ngOnInit() {
    this.geralInternasService.getAPI(bannerAPI);
    this.getBanner();
    this.startRotation();
  }

  // Starts the banner inifinity loop
  startRotation() {
    this.timer = setInterval(this.next.bind(this), 3500);
  }

  // Stops the banner loop
  stopRotation(): void {
    clearTimeout(this.timer);
    this.timer = null;
  }

  // Chooses a banner to display randonly
  getBanner(): void {
    this.geralInternasService.getBanners().subscribe(res => {
      if (res.length) {
        res.forEach(element => {
          if (element.imagem.Url !== null && element.imagem.Url !== undefined) {
            const img = this.setImages(element);
            const txt = this.setTexts(element);
          }
        });
        this.choose();
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }

  // Chooses a banner to display randonly
  choose(): void {
    const txt = this.dadosSet.texts[
      Math.abs(this.currentNumber) % this.dadosSet.texts.length
    ];
    const img = this.dadosSet.images[
      Math.abs(this.currentNumber) % this.dadosSet.images.length
    ];
    this.dados = { img, txt };
  }

  // Select next banner
  next(): void {
    this.currentNumber++;
    this.choose();
  }

  // Select prev banner
  prev(): void {
    this.currentNumber--;
    this.choose();
  }

  // Retuns an image from images array
  setImages(item) {
    this.dadosSet.images.push(item.imagem.Url);
  }

  // Retuns corresponding text to the image from images array
  setTexts(item) {
    this.dadosSet.texts.push(item.Title);
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
