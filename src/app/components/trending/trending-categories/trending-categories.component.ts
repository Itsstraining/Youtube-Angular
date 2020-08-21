import { Component, OnInit,Input } from '@angular/core';
import {TrendingComponent} from '../trending.component';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Video } from 'src/app/models/video.model';
import {DataService} from '../../../services/data.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-trending-categories',
  templateUrl: './trending-categories.component.html',
  styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent implements OnInit {
  @Input() dbButton:any=null; listOfVideo:Video;
  isType: boolean;
  show:boolean;

  constructor(private router: Router, public dataService: DataService) { }
  navigateToVideoTrending() {
    this.router.navigate(["/trending", this.dbButton.title]);
    
  }
 
 
  ngOnInit(): void {
    console.log(this.dbButton);
  }
  
  }



