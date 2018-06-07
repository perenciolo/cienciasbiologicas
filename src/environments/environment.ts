// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  img: {
    chevL:
      '/../../cienciasbiologicas/SiteAssets/img/sprites.svg#icon-chevron-thin-right',
    chevR:
      '/../../cienciasbiologicas/SiteAssets/img/sprites.svg#icon-chevron-thin-right',
    brasaoBranco:
      '../../cienciasbiologicas/SiteAssets/img/sprites.svg#icon-pucminas',
    oncaXS: '/cienciasbiologicas/SiteAssets/img/oncaxs.png'
  },
  bannerAPI: `/cienciasbiologicas/SiteAssets/api/bannerdestaque.json`,
  eventosAPI: '/cienciasbiologicas/SiteAssets/api/eventos.json',
  noticiasAPI: `/cienciasbiologicas/SiteAssets/api/noticias.json`,
  globalMenuAPI: `/cienciasbiologicas/SiteAssets/api/menus.json`,
  defaultPaginasAPI: `/cienciasbiologicas/SiteAssets/api/paginas-graduacao.json`,
  departamentoMenuAPI: `/cienciasbiologicas/SiteAssets/api/departamentosmenu.json`,
  departamentoPaginasAPI: `/cienciasbiologicas/SiteAssets/api/departamentospaginas.json`,
  extensaoMenuAPI: `/cienciasbiologicas/SiteAssets/api/extensaomenu.json`,
  extensaoPaginasAPI: `/cienciasbiologicas/SiteAssets/api/extensaopaginas.json`,
  graduacaoMenuAPI: `/cienciasbiologicas/SiteAssets/api/graduacaomenu.json`,
  graduacaoPaginasAPI: `/cienciasbiologicas/SiteAssets/api/graduacaopaginas.json`,
  infraestruturaMenuAPI: `/cienciasbiologicas/SiteAssets/api/inframenus.json`,
  infraestruturaPaginasAPI: `/cienciasbiologicas/SiteAssets/api/infrapaginas.json`,
  oportunidadesMenuAPI:
    '/cienciasbiologicas/SiteAssets/api/oportunidadesmenu.json',
  oportunidadesPaginasAPI: `/cienciasbiologicas/SiteAssets/api/oportunidadespaginas.json`,
  pesquisaMenuAPI: `/cienciasbiologicas/SiteAssets/api/pesquisamenu.json`,
  pesquisaPaginasAPI: `/cienciasbiologicas/SiteAssets/api/pesquisapaginas.json`,
  galeriaAPI(id) {
    return `/cienciasbiologicas/SiteAssets/api/infragaleriaitem${id}.json`;
    // return `http://localhost:3000/db`;
  }
};
