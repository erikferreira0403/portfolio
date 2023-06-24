import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { VideosComponent } from 'src/app/components/videos/videos.component';

interface MeuObjeto {
  title: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {



  @Input() videoUrl!: string;
  isModalOpen = false;
  textoCompleto!: string;
  dialogRef!: MatDialogRef<any>;

  public MeuObjeto: any = {
    description: '',
  };

   videoList: MeuObjeto[] = [
    {title: 'CRUD MVC ASP.NET', description : '  #CRUD, dessa vez em #ASP.NET MVC.  O #MVC (Model-View-Controller) é um padrão de arquitetura amplamente usado no ASP.NET. Ele divide a lógica de negócios, a apresentação dos dados e a interação do usuário em três componentes: modelo, visão e controlador.  O modelo manipula os dados e a lógica de negócios, a visão exibe os dados e o controlador lida com as solicitações do usuário e coordena a interação entre o modelo e a visão. Essa separação de responsabilidades facilita a manutenção, reuso e colaboração no desenvolvimento de aplicativos web.     '},
    {title: 'STARS WARS',description : 'Um frontend em Angular 14 consumindo a Star Wars API'}];

  constructor(private dialog: MatDialog) {}

  openModal(text: string) {
   this.dialog.open(VideosComponent, {
    height: '400px',
    width: '600px',
      data: {
        description: text,
      }
    });
  }
}
