import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers: [EquipeService]
})
export class EquipeComponent implements OnInit {

  constructor(equipeService:EquipeService) {
    this.equipes.findAll()
    .subscribe(response =>{
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }   

  ngOnInit() {
  }

  nomeMetodo = 'Equipe';

  equipes;

}
