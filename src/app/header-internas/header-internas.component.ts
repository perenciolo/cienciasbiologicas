import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

const brasaoBranco = environment.img.brasaoBranco;
const oncaXS = environment.img.oncaXS;

@Component({
  selector: 'cb-header-internas',
  templateUrl: './header-internas.component.html',
  styleUrls: ['./header-internas.component.sass']
})
export class HeaderInternasComponent implements OnInit {
  brasaoBranco = brasaoBranco;
  oncaXS = oncaXS;
  constructor() {}

  ngOnInit() {}
}
