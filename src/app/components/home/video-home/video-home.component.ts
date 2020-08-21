import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataService} from '../../../services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})

export class VideoHomeComponent implements OnInit {
  @ViewChild('mediaPlayer') mediaPlayerElement: ElementRef;

  mediaPlayer;
  listvideo:Array<any>=[];
  constructor(public dataService:DataService, public sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
  }
  
}