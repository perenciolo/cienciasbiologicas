export const environment = {
  production: true,
  img: {
    chevL:
      '/cienciasbiologicas/SiteAssets/img/sprites.svg#icon-chevron-thin-right',
    chevR:
      '/cienciasbiologicas/SiteAssets/img/sprites.svg#icon-chevron-thin-right',
    brasaoBranco:
      '/cienciasbiologicas/SiteAssets/img/sprites.svg#icon-pucminas',
    oncaXS: '/cienciasbiologicas/SiteAssets/img/oncaxs.png'
  },
  bannerAPI: `/cienciasbiologicas/_api/Web/Lists/getByTitle('BannerDestaque')/items?$orderBy=DataPublicacao desc`,
  eventosAPI: `/cienciasbiologicas/_api/Web/Lists/getByTitle('eventos')/items?$orderBy=DataPublicacao desc&$orderBy=Modified desc`,
  noticiasAPI: `/cienciasbiologicas/_api/Web/Lists/getByTitle('noticias')/items?$orderBy=DataPublicacao desc`,
  globalMenuAPI: `/cienciasbiologicas/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  defaultPaginasAPI: `/cienciasbiologicas/_api/Web/Lists/getByTitle('Páginas')/items`,
  departamentoMenuAPI: `/cienciasbiologicas/departamento/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  departamentoPaginasAPI: `/cienciasbiologicas/departamento/_api/Web/Lists(guid'48fa8b67-465e-4167-bfdf-a43d63712bdc')/items`,
  extensaoMenuAPI: `/cienciasbiologicas/extensao/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  extensaoPaginasAPI: `/cienciasbiologicas/extensao/_api/Web/Lists/getByTitle('Páginas')/items`,
  graduacaoMenuAPI: `/cienciasbiologicas/graduacao/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  graduacaoPaginasAPI: `/cienciasbiologicas/graduacao/_api/Web/Lists/getByTitle('Páginas')/items`,
  infraestruturaMenuAPI: `/cienciasbiologicas/infraestrutura/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  infraestruturaPaginasAPI: `/cienciasbiologicas/infraestrutura/_api/Web/Lists/getByTitle('Páginas')/items`,
  oportunidadesMenuAPI:
    "/cienciasbiologicas/oportunidades/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'",
  oportunidadesPaginasAPI: `/cienciasbiologicas/oportunidades/_api/Web/Lists/getByTitle('Páginas')/items`,
  pesquisaMenuAPI: `/cienciasbiologicas/projetos/_api/navigation/menustate?mapprovidername='GlobalNavigationSwitchableProvider'`,
  pesquisaPaginasAPI: `/cienciasbiologicas/projetos/_api/Web/Lists/getByTitle('Páginas')/items`,
  galeriaAPI(id) {
    return `/cienciasbiologicas/infraestrutura/_api/Web/Lists/getByTitle('galeriainfra')/items(${id})`;
  }
};
