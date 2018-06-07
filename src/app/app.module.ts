import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MenusService } from './services/menus.service';
import { GeralInternasService } from './services/geral-internas.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SgaComponent } from './home/sga/sga.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfraestruturaComponent } from './infraestrutura/infraestrutura.component';
import { HeaderInternasComponent } from './header-internas/header-internas.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { GraduacaoComponent } from './graduacao/graduacao.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { EventosComponent } from './home/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SgaComponent,
    FooterComponent,
    NavbarComponent,
    InfraestruturaComponent,
    HeaderInternasComponent,
    PesquisaComponent,
    ExtensaoComponent,
    OportunidadesComponent,
    GraduacaoComponent,
    DepartamentoComponent,
    NoticiasComponent,
    DestaquesComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    MenusService,
    GeralInternasService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
