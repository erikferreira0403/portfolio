import { HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;

  title = 'portfolioApp';
  constructor() {
  }

  ngOnInit(): void {


    this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
   }
   @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  

}
