import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { VideosComponent } from 'src/app/components/videos/videos.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MeuObjeto {
  src: string;
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
    img: '/../../../assets/img/cadastrousuariosimage.jpg',
     title: 'CRUD Usuários (Full-Stack)',
      description : 'Projeto Full-Stack, criando uma API utilizando .Net 5, com Front-end em Angular 14, e SQLite como banco de dados, onde tive a ideia de realizar um aplicação que permita um trabalho em equipe, começando pelo gerenciamento de usuários que vão ter acesso a aplicação. '},
      {src:'/../../../assets/img/crudmvcvideo.mp4',
    img: '/../../../assets/img/crudmvc.jpg',
     title: 'CRUD MVC ASP.NET (Full-Stack)',
      description : 'CRUD, dessa vez em ASP.NET MVC. O MVC (Model-View-Controller) é um padrão de arquitetura amplamente usado no ASP.NET. Ele divide a lógica de negócios, a apresentação dos dados e a interação do usuário em três componentes: modelo, visão e controlador. O modelo manipula os dados e a lógica de negócios, a visão exibe os dados e o controlador lida com as solicitações do usuário e coordena a interação entre o modelo e a visão. Essa separação de responsabilidades facilita a manutenção, reuso e colaboração no desenvolvimento de aplicativos web.'},
    {src:'/../../../assets/img/starwarsvideo.mp4',
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

}
