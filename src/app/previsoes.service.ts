import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor(
    private httpClient: HttpClient
    ) { }

  obterPrevisoes(cidade): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=801ac8eb316986872ddb3af2ca253a22&units=metric&lang=pt_br&cnt=16`);
  }

  // previsoes: Previsao[] = [
  //   {
  //     data: '20/02/2020 15:00',
  //     descricao: 'Sol',
  //     tempMax: 32,
  //     tempMin: 27,
  //     humidity: 0.87,
  //     imgURL: '../assets/01d.png'
  //   },
  //   {
  //     data: '20/02/2020 18:00',
  //     descricao: 'Sol com Nuvens',
  //     tempMax: 28,
  //     tempMin: 22,
  //     humidity: 0.85,
  //     imgURL: '../assets/02d.png'
  //   },
  //   {
  //     data: '20/02/2020 21:00',
  //     descricao: 'Noite Limpa',
  //     tempMax: 32,
  //     tempMin: 27,
  //     humidity: 0.87,
  //     imgURL: '../assets/01n.png'
  //   }
  // ];
}
