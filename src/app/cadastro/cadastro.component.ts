import { Component, OnInit } from '@angular/core';
import { Postagem } from '../models/postagem.model';
import { PostagensService } from '../services/postagens.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private postagensService: PostagensService) { }

  ngOnInit(): void {
  }
cadastrarNovoPost( ){
  const postagem: Postagem = {
conteudo: "Testando",
data: new Date(),
dislikes: 0,
likes: 1
  };
this.postagensService.salvar(postagem);
}

}
