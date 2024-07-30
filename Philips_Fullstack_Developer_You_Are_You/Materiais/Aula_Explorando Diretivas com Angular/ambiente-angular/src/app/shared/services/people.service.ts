import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' /*Este atributo garante que o serviço ficará disponível para ser injetado em qualquer ponto da aplicação a partir da raiz.*/
})
export class PeopleService {

  constructor() { }
}
