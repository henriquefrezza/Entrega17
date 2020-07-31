import { Component } from '@angular/core';
import { PrevisoesService } from './previsoes.service';
import { Previsao } from './model/previsao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public previsoes: Previsao[];

  constructor(
    private previsoesService: PrevisoesService
  ) { 
  }

  verPrevisoes(cidade) : void {
    this.previsoesService.obterPrevisoes(cidade).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }

}
