import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../services/equipe.service';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers: [EquipeService]
})
export class EquipeComponent implements OnInit {

  equipes: Array<any>;

  constructor(private equipeService : EquipeService) { }   

  ngOnInit() {
    this.findAll();
  }

  listaEquipe = 'Lista de Equipes';

  findAll(){
      this.equipeService.findAll().subscribe(dados => this.equipes = dados);
  }

  insert(){
    //this.equipeService.findAll().subscribe(dados => this.equipes = dados);
  }
}
