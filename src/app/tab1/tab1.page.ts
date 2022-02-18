import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  models: { id: number, nom: string, prix: number, photo: string }[] = [
    { id: 1, nom: "Abaya", prix: 25000, photo: "photo1" },
    { id: 2, nom: "Taille basse", prix: 12500, photo: "photo2" },
    { id: 3, nom: "Robe simple", prix: 5000, photo: "photo3" },
    { id: 4, nom: "Veste 3 boutons", prix: 50000, photo: "photo4" },
    { id: 5, nom: "Veste sans poche", prix: 35000, photo: "photo5" },
  ];

  constructor() { }

}
