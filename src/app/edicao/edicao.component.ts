import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostagensService } from '../services/postagens.service';
import { Postagem } from '../models/postagem.model';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {
postagem: Postagem;
  
  formulario = new FormGroup({
    conteudo: new FormControl(null, [Validators.required]),
  });

  constructor(
    private postagensService: PostagensService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

 async ngOnInit() {
  
  const idPostagem = this.activatedRoute.snapshot.params.id;
  this.postagem = await this.postagensService.retornarPostagem(idPostagem);


  this.formulario.controls['conteudo'].setValue(this.postagem.conteudo);
}

  async enviar() {

    if (this.formulario.invalid) {
      return;
    }

   // let postagem: Postagem = this.formulario.value;
this.postagem.conteudo = this.formulario.controls['conteudo'].value;
    this.postagem.dataEdicao = new Date();

this.postagem = await this.postagensService.atualizar(this.postagem);

    this.router.navigate(['home']);

  }

}
