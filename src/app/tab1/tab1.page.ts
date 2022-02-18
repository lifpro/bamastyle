import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  models: { id: number, nom: string, prix: number, photo: string }[] = [
    { id: 0, nom: "Création", prix: 15000, photo: "photo0.png" },
    { id: 1, nom: "Abaya", prix: 25000, photo: "photo1.jpg" },
    { id: 2, nom: "Taille basse", prix: 12500, photo: "photo2.jpg" },
    { id: 3, nom: "Robe simple", prix: 5000, photo: "photo3.jpg" },
    { id: 4, nom: "Veste 3 boutons", prix: 50000, photo: "photo4.jpg" },
    { id: 5, nom: "Veste sans poche", prix: 35000, photo: "photo5.jpg" },
  ];

  constructor() { }

}
