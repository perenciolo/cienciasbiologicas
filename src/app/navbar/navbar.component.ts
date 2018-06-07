import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenusService } from '../services/menus.service';
import { environment } from '../../environments/environment';

const menuAPI = environment.globalMenuAPI;

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  data;
  loading;
  toggle = false;
  hideLinks = false;
  hideLinks2 = false;
  isActive = '';
  open = false;
  drop = false;

  constructor(private menuService: MenusService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getAPI(menuAPI);
    this.menuService.getNavItems().subscribe(res => { this.createMenuItems(res); });
  }

  createMenuItems(data) {
    this.data = data.filter((value) => value.IsHidden === false);
    // console.log(this.data);
  }

  activate(item) {
    (this.isActive.length === 0) ? this.isActive = item : this.isActive = '';
  }

  dropar() {
    this.open = !this.open;
  }

}
