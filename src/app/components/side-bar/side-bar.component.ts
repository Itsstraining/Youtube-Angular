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
      path: '/user'
    },
    {
      icon: 'subscriptions',
      desc: '',
      path: '/user'
    }
  ];
  ngOnInit() {
  }

  router(router: string) {
    this.route.navigateByUrl(router);
  }

  
}
