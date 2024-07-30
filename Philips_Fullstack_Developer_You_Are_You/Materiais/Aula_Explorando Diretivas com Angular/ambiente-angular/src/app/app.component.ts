import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Francisco Ferreira Santos";
  text = "";

  pessoas = [
    {
      nome: "Antônio",
      sobrenome: "Pereira"
    },
    {
      nome: "Paulo",
      sobrenome: "Cardoso"
    },
    {
      nome: "Mônica",
      sobrenome: "Carvalho"
    },
    {
      nome: "Tânia",
      sobrenome: "Aparecida"
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log(nome, 'clicou em mim.')
  }

}