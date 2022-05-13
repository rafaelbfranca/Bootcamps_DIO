import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' /*Este atributo garante que o serviço ficará disponível para ser injetado em qualquer ponto da aplicação a partir da raiz.*/
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ivonaldo',
        lastName: 'Soares',
        age: 26
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 28
      },
      {
        firstName: 'Joao',
        lastName: 'Pereira',
        age: 32
      },
      {
        firstName: 'Marcio',
        lastName: 'Santos',
        age: 40
      },
    ]

    return of(peopleArray)
  }
}
