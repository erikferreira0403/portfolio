import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-float-icon',
  templateUrl: './float-icon.component.html',
  styleUrls: ['./float-icon.component.css']
})
export class FloatIconComponent  implements AfterViewInit {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @ViewChild('tooltip') tooltip!: MatTooltip;
  showTooltip = true;
  tooltipText = 'Tooltip de Exemplo';
ngAfterViewInit() {
    if (this.tooltip) {
      this.tooltip.show();
    }


  }

  openMenu() {
    if (this.menuTrigger && this.tooltip) {
      this.tooltip.hide();
      this.menuTrigger.openMenu();
    }
  }

}
