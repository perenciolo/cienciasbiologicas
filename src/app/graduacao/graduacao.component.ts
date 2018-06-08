import { Router, ActivatedRoute, Params } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeralInternasService } from '../services/geral-internas.service';
import { environment } from '../../environments/environment';

const menuAPI = environment.graduacaoMenuAPI;
const paginasAPI = environment.graduacaoPaginasAPI;
const galeriaAPI = environment.galeriaAPI;

@Component({
  selector: 'cb-graduacao',
  templateUrl: './graduacao.component.html',
  styleUrls: ['./graduacao.component.sass']
})
export class GraduacaoComponent implements OnInit {
  data;
  headLine;
  pageSet;
  pages = null;
  loaded = false;
  hasItGallery = false;
  gallery;
  gallerySet: Array<any> = [];
  galleryHero;

  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(
    private geralInternasService: GeralInternasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getNavHeadLine();
    const page = this.activatedRoute.snapshot.params.id;
    this.getPages();
    console.log(page);
    if (page) {
      this.getPageById(page);
    }
  }

  getId(data) {
    if (data.PageData) {
      return data.PageData['ID'];
    }
  }

  getNavItems() {
    this.geralInternasService.getAPI(menuAPI);
    this.geralInternasService.getNavItems().subscribe(res => {
      this.data = res;
    });
  }

  getNavHeadLine() {
    this.geralInternasService.getAPI(menuAPI);
    this.geralInternasService
      .getNavHeadLine()
      .subscribe(res => (this.headLine = res));
  }

  getPages() {
    this.getNavItems();
    this.geralInternasService.getAPI(paginasAPI);
    this.geralInternasService.getPageContent().subscribe(res => {
      // this.data = res.slice(1);
      // console.log(this.data);
      const newData = [];
      this.data.forEach(element => {
        // pega o elemento no pageSet pelo Title
        const correspondente = res.filter(el => el.Title === element.Title);
        element.PageData = correspondente[0];
        newData.push(element);
      });
      this.data = newData;
      this.pageSet = res;
      this.pageSet = this.pageSet.slice(1);
      this.diffHTML(this.pageSet[0].Conteudo2);
      // Has it gallery?
      this.hasGallery(this.pageSet);
    });
  }

  // Verify if page has gallery and set the gallery
  hasGallery(page: Array<any>) {
    // console.log(page);
    this.gallery = page.filter(value => {
      if (value.Galeria_x0020_de_x0020_Fotos_x0020_do_x0020_SiteId) {
        return (
          value.Galeria_x0020_de_x0020_Fotos_x0020_do_x0020_SiteId.results
            .length !== 0
        );
      }
    });
    // console.log(this.gallery);
    if (this.gallery) {
      this.gallery.forEach(element => {
        // All gallery items
        const g =
          element.Galeria_x0020_de_x0020_Fotos_x0020_do_x0020_SiteId.results;
        for (let i = 0; i < g.length; i++) {
          // console.log(g[i]);
          this.geralInternasService.getAPI(galeriaAPI(g[i]));
          this.geralInternasService.getPageGallery().subscribe(res => {
            // Sets a default image to display
            if (res['Id'] === 1) {
              this.galleryHero = res['Imagem']['Url'];
            }
            this.gallerySet.push(res);
            this.hasItGallery = true;
          });
        }
        // console.log(this.gallerySet);
      });
    }
    this.loaded = true;
  }

  // Sanitize HTML
  diffHTML(diff) {
    this.dataContainer.nativeElement.innerHTML = diff;
  }

  // Gets a page by the name
  getPageByName(name: string) {
    if (this.loaded) {
      this.pages = null;
      this.pages = this.pageSet.filter(value => value.Title === name);
      // Clean gallery sets
      this.gallerySet = [];
      // Has it gallery?
      this.hasGallery(this.pages);
      this.diffHTML(this.pages[0].Conteudo2);
    }
  }
  getPageById(id) {
    if (this.loaded) {
      this.pages = null;
      this.pages = this.pageSet.filter(value => value.Id === id);
      // Clean gallery sets
      this.gallerySet = [];
      // Has it gallery?
      this.hasGallery(this.pages);
      this.diffHTML(this.pages[0].Conteudo2);
    }
  }

  // Change gallery image source
  changeIMG(event) {
    this.galleryHero = event.target.attributes.src.value;
  }
}
