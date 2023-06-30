import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { VideosComponent } from 'src/app/components/videos/videos.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MeuObjeto {
  src: string;
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
  isModalOpen = false;
  textoCompleto!: string;
  dialogRef!: MatDialogRef<any>;
  isVideoLoading: boolean = true;
  safeUrl: any;

   videoList: MeuObjeto[] = [
    {src:'https://www.youtube.com/embed/mVMz744Q0rg',
     title: 'CRUD MVC ASP.NET',
      description : '  #CRUD, dessa vez em #ASP.NET MVC.  O #MVC (Model-View-Controller) é um padrão de arquitetura amplamente usado no ASP.NET. Ele divide a lógica de negócios, a apresentação dos dados e a interação do usuário em três componentes: modelo, visão e controlador.  O modelo manipula os dados e a lógica de negócios, a visão exibe os dados e o controlador lida com as solicitações do usuário e coordena a interação entre o modelo e a visão. Essa separação de responsabilidades facilita a manutenção, reuso e colaboração no desenvolvimento de aplicativos web.     '},
    {src:'https://www.youtube.com/embed/CJDM7JezsE8',
     title: 'STARS WARS',
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
