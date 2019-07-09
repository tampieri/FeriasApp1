import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { EquipeDTO } from "../../models/equipe.dto";
import { Observable } from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(public http: HttpClient) { }

  getEquipes() : string[] {
    return  ['dev', 'prod', 'test'];
  }

  findAll() : Observable<EquipeDTO[]>  {
    return this.http.get<EquipeDTO[]>(`${API_CONFIG.baseUrl}/equipes`);
  }
  
}
