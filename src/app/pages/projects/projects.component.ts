import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { VideosComponent } from 'src/app/components/videos/videos.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

interface MeuObjeto {
  src: string;
  deploysrc: string;
  img: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() videoUrl!: string;
  textoCompleto!: string;
  dialogRef!: MatDialogRef<any>;
  isVideoLoading: boolean = true;
  safeUrl: any;

   videoList: MeuObjeto[] = [
     {src:'/../../../assets/img/cadastrousuarios.mp4',
     deploysrc:'',
    img: '/../../../assets/img/cadastrousuariosimage.jpg',
     title: 'CRUD Usuários (Full-Stack)',
      description : 'Projeto Full-Stack, criando uma API utilizando .Net 5, com Front-end em Angular 14, e SQLite como banco de dados, onde tive a ideia de realizar um aplicação que permita um trabalho em equipe, começando pelo gerenciamento de usuários que vão ter acesso a aplicação. '},
      {src:'/../../../assets/img/crudmvcvideo.mp4',
      deploysrc:'',
    img: '/../../../assets/img/crudmvc.jpg',
     title: 'CRUD MVC ASP.NET (Full-Stack)',
      description : 'CRUD, dessa vez em ASP.NET MVC. O MVC (Model-View-Controller) é um padrão de arquitetura amplamente usado no ASP.NET. Ele divide a lógica de negócios, a apresentação dos dados e a interação do usuário em três componentes: modelo, visão e controlador. O modelo manipula os dados e a lógica de negócios, a visão exibe os dados e o controlador lida com as solicitações do usuário e coordena a interação entre o modelo e a visão. Essa separação de responsabilidades facilita a manutenção, reuso e colaboração no desenvolvimento de aplicativos web.'},
    {src:'/../../../assets/img/starwarsvideo.mp4',
    deploysrc:'https://soft-speculoos-8316a2.netlify.app/#/',
    img:'/../../../assets/img/starwars.jpg',
     title: 'STARS WARS (Front-End)',
     description : 'Um frontend em Angular 14 consumindo a Star Wars API'}];
//<iframe width="560" height="315" src="https://www.youtube.com/embed/CJDM7JezsE8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {

     }


  openModal(src:string, title: string, description: string) {
   this.dialog.open(VideosComponent, {
    height: '400px',
    width: '600px',
      data: {
        src: src,
        description: description,
        title: title
      }
    });
  }

   getSafeUrl(videoLink: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoLink + "?controls=0");
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
