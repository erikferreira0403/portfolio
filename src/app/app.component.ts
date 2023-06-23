import { Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'portfolioApp';
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
   }

}
