import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_MENU_SCROLL_STRATEGY, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';
import { BlockScrollStrategy, Overlay, RepositionScrollStrategy } from '@angular/cdk/overlay';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';


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
  bottomSheetOpen = false;
  buttonOffset = 0;
  bottomSheetRef: any;


  constructor(public dialog: MatDialog,private _bottomSheet: MatBottomSheet) {}


  openBottomSheet(): void {
    if (this.bottomSheetRef) {
      this.bottomSheetRef.dismiss();
      this.bottomSheetRef = null;
      this.buttonOffset = 0;
    } else {
      this.bottomSheetRef = this._bottomSheet.open(BottomSheetOverviewExampleSheet);
      this.buttonOffset = this.buttonOffset === 0 ? 100 : 0;

      this.bottomSheetRef.afterDismissed().subscribe(() => {
        this.buttonOffset = 0;
      });
    }
  }

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


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
  <mat-nav-list class="nav">
 <a class="link" (click)="openDialog('https://github.com/erikferreira0403', 'Github')" mat-list-item (click)="openLink($event)">
 <div class="linkDesc">

    <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

     <span matLine  class="linkLine">Visite meu Github!</span>
     </div>

  </a>


 <a class="link" (click)="openDialog('https://api.whatsapp.com/send?phone=5585985501959&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20preciso%20de%20seus%20serviços.', 'Whatsapp')" mat-list-item (click)="openLink($event)">
   <div class="linkDesc">
   <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR4nO2aTWxNQRTHfxQtKUoUC6HxsSA2EgtrQYOKRoTSjZ34qNKljaQrXwuNRImkCwsaYuH5ShcICxGxsdHPSCkRaSMRi6piZJIjeXmZuW/m3tt5N03/yUle8u793/N/c+bMOec+mMLkxQKgHrgAPAR6gG/AmJj+3C3f6Wt2A1VkBOVAI9AF/AaUp+l7HgMHhSs4ZgMtwOcYztvsE3ASqAglYjswkKKAQusHaidSgF76tgkUUGg3ZOVTxRLgTUARSuw1sDgtETWy3KpE1ic+JEK1pFFVYhsAlsYVUVGicFIRYRYrRbdnwHlVYJfjpFiVUdvmKkIvX28GHFYW63c9NFscCX8BJ4A5wHRgK/AnkJhml9VwLTsOG+7PBRIyVGzjNzoSPbfcXxswxA5ECelyJNlvuX9awP31KKqfcC3FV0f8GM2BhIwD80wO1HuQRMVnlSSCEGJ2mRy46EGgSxcbVgF/Awk5b3LggQfBTouImcDTQCIUcN/kRJ8Hwe2MlDU9JidGPAj0Hlhu4HgWWMiwSciYJ0mngWMtMBpQyE+TkDgO7DHwHC21kC8xiPSsaoWBq62UofUuJtlbYK7hhC+WzgcTzMOUmB74JUq/haanh2WW2u2H4XqdWFbmnTvtMUM7ZxLSmnCZO6ScL8Qy4GZeia9Li82G63RPfhb47vHMc0lLlKhZlD4UTVgjJ/Fey/f517k+r85EMF+yQFIxT4CFxMcij7PMWDSm2RgNWsLHBTscn6H3dOLGysV04Xhd9ogP7jnyN0SR6Pj+kKIYJeF6BdhYRIBuDa46cn4EZhX7RY6lLCTf9Fl1GtggQ4tKGYceAd578DS5LG3NBApJq+ItdxFyKAPOqoh9twVH3MqAw8pil1xFlHn2JSHtlcsG/49NGXBYWV4r6JdNzjiTAadVgfVaWoVIvMxgOFX7ivAZ0IWwa3Ff7OzLgPNKzgnnFGtCh2NreVdeJ5yS4jAtAbrsaErjHxBDBvKvwB3gOLBeWth8zJCpeC5mhzcuVWyDT2othhcygOiU2medwfEoVEpz1ioVbLfwjcqoaURqrZx0dnWGXn8KTBb8A31C/2cT3/wMAAAAAElFTkSuQmCC">

   <span matLine class="linkLine" >Entre em contato comigo pelo whatsapp!</span>
  </div>
  </a>

</mat-nav-list>`,
  standalone: true,
  imports: [MatListModule],
  styles: [`

.link{
  width: 100%;
  align-items: center;

}
.linkDesc{
  padding-bottom:10px;
  display: flex;
  flex-direction: row;
  height: 3vw;
  width: 100%;
}
.linkLine{
  padding-top:10px
}
.icon{
  width: 3vw;
  height: 3vw;
  padding-left: 8px;

}
@media only screen and (max-width: 760px) {

  .icon{
    width: 7vw;
    height: 7vw;

  }
  .link{
    line-height: 100;
}
.linkDesc{
  padding-bottom:10px;
  height: 5vw;
  width: 100%;
}
.linkLine{
  padding-top: 5px;
}

}
  `]
})

export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, public dialog: MatDialog) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();

  }

  openDialog(link: string, title:string): void {
    this.dialog.open(SeuModalComponent, {
      width: `400px`,
      height:` 100px`,
      data: { link: link, title: title }
    });
  }
}


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
