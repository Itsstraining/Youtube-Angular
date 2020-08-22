import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  opened: boolean;

  constructor(private route: Router) { }

  data = [
    {
      icon: 'home',
      desc: 'Home',
      path: '/home'
    },
    {
      icon: 'local_fire_department',
      desc: 'Trending',
      path: '/trending'
    },
    {
      icon: 'subscriptions',
      desc: 'Subscriptions',
      path: '/subcriptions'
    },
    {
      icon: 'library_add',
      desc: 'Library',
      path: '/library'
    },
    {
      icon: 'history',
      desc: 'History',
      path: '/history'
    }
  ];

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  router(router: string) {
    this.route.navigateByUrl(router);
  }

  sidenav: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
