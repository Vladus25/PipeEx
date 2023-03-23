import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PipeEx';
  date = new Date();

  user: any[] = [
    { name: 'Mario', cognome: 'Rossi', eta: 12, colore: 'yellow' },
    { name: 'Luca', cognome: 'Bianchi', eta: 21, colore: 'red' },
    { name: 'Paola', cognome: 'Verdi', eta: 20, colore: 'blue' },
    { name: 'Giovanni', cognome: 'Neri', eta: 45, colore: 'purple' },
  ];

  selectedGenere = "All";

  films: any[] = [
    {
      titolo: 'Smile',
      genere: 'Horror',
      data_di_uscita: '2022-09-30',
      img: '../assets/img/Smile.jpg',
    },
    {
      titolo: 'Star Wars: Episodio IV',
      genere: 'Fantascienza',
      data_di_uscita: '1977-05-25',
      img: '../assets/img/Star.jpg',
    },
    {
      titolo: 'Il Signore degli Anelli',
      genere: 'Fantasy',
      data_di_uscita: '1977-05-25',
      img: '../assets/img/Anelli.jpg',
    },
    {
      titolo: 'Titanic',
      genere: 'Drammatico',
      data_di_uscita: '1977-05-25',
      img: '../assets/img/Titanic.jpg',
    },
  ];
}
