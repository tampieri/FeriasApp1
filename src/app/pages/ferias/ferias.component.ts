import { Component, OnInit } from '@angular/core';
import { FeriasService } from '../../services/ferias.service';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.css'],
  providers: [FeriasService]
})
export class FeriasComponent implements OnInit {

  listaferias: Array<any>;

  constructor(private feriasService : FeriasService) { }

  ngOnInit() {
    this.findAll();
  }

  listaFerias = 'Lista de Ferias';

  findAll(){
      this.feriasService.findAll().subscribe(dadosFer => this.listaferias = dadosFer);
  }

  insert(){
    //this.feriasService.findAll().subscribe(dados => this.ferias = dados);
  }

}
