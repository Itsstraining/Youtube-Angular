import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
      desc: '',
      path: '/home'
    },
    {
      icon: 'local_fire_department',
      desc: '',
      path: '/trending'
    },
    {
      icon: 'subscriptions',
      desc: '',
      path: '/subcriptions'
    }
  ];

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  router(router: string) {
    this.route.navigateByUrl(router);
  }

}
