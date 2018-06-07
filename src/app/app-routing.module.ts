import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfraestruturaComponent } from './infraestrutura/infraestrutura.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { GraduacaoComponent } from './graduacao/graduacao.component';
import { DepartamentoComponent } from './departamento/departamento.component';

const routes: Routes = [
  {
    path: 'nossainfraestrutura',
    component: InfraestruturaComponent
  },
  {
    path: 'apesquisa',
    component: PesquisaComponent
  },
  {
    path: 'aextensao',
    component: ExtensaoComponent
  },
  {
    path: 'asoportunidades',
    component: OportunidadesComponent
  },
  {
    path: 'agraduacao',
    component: GraduacaoComponent
  },
  {
    path: 'odepartamento',
    component: DepartamentoComponent
  },
  {
    path: '',
    children: [],
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
