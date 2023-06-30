import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  safeurl: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {src:string, title:any, description: any},  private sanitizer: DomSanitizer){}
  ngOnInit(): void {
   this.safeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.src)
   }



}
