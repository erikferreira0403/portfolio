import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  @Input() videoUrl!: string;
  @Input() description!: string;

}
