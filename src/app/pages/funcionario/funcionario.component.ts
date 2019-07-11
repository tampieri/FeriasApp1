import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
  providers: [FuncionarioService]
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Array<any>;

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
    this.findAll();
  }

  listaFuncionario = 'Lista de Funcionarios';

  findAll(){
    this.funcionarioService.findAll().subscribe(dadosFun => this.funcionarios = dadosFun);
}

insert(){
  //this.funcionariosService.findAll().subscribe(dados => this.funcionarios = dados);
}

}
