import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_MENU_SCROLL_STRATEGY, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';
import { BlockScrollStrategy, Overlay, RepositionScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-float-icon',
  templateUrl: './float-icon.component.html',
  styleUrls: ['./float-icon.component.css']
})
export class FloatIconComponent  implements AfterViewInit {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @ViewChild('tooltip') tooltip!: MatTooltip;
  showTooltip = true;
  tooltipText = ' Redes Sociais';
  textoCompleto= '';
  title = '';
  constructor(public dialog: MatDialog) {}

ngAfterViewInit() {
    if (this.tooltip) {
      this.tooltip.show();
    }


  }

  openMenu() {
    if (this.showTooltip) {
      this.tooltip.hide();
      this.menuTrigger.openMenu();
      this.showTooltip = !this.showTooltip

    } else if (!this.showTooltip){
      this.menuTrigger.closeMenu();
      this.showTooltip = !this.showTooltip


    }
  }
openDialog(link: string, title:string): void {
  this.dialog.open(SeuModalComponent, {
    width: `400px`,
    height:` 100px`,
    data: { link: link, title: title }
  });
}
}

const isToucheDevice = () => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
};
const scrollBlockFactory = (overlay: Overlay): () => BlockScrollStrategy  => {
  return () => overlay.scrollStrategies.block();
};

const scrollRepositionFactory = (overlay: Overlay): () => RepositionScrollStrategy  => {
  return () => overlay.scrollStrategies.reposition();
};


  @Component({
    selector: 'seu-modal',
    template: `
    <div class="container">
      <h3>Deseja ir para o {{data.title}}?</h3>
      <div>
      <a [href]="data.link">

      <button mat-button color="primary" >Sim</button>
      </a>
      <button mat-button color="primary"(click)="closeModal()">Não</button>
      </div>
    </div>
    `,
      standalone: true,

     imports: [MatDialogModule, MatButtonModule],
     styles: ['.container { padding-top:10px; align-items: center; display: flex; flex-wrap: wrap; justify-content: space-around; flex-direction: column; }'],
     providers: [
      { provide: MAT_MENU_SCROLL_STRATEGY, useFactory: isToucheDevice() ? scrollBlockFactory : scrollRepositionFactory, deps: [Overlay] }
    ]
  })
  export class SeuModalComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: {link: string, title: string}, public dialog: MatDialog
    ) {}

    closeModal(): void {
      this.dialog.closeAll();
      // Lógica para fechar o modal, se necessário
    }
  }
