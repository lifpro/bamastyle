import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  commandes: any[] = [
    {
      'client': { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      'modele': { id: 0, nom: "Création", prix: 15000, photo: "photo0.png" },
      'tarif': '35000',
      'dateLivraison': '18/07/2022',
    },
    {
      'client': { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      'modele': { id: 0, nom: "Création", prix: 15000, photo: "photo0.png" },
      'tarif': '35000',
      'dateLivraison': '18/07/2022',
    },
    {
      'client': { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      'modele': { id: 0, nom: "Création", prix: 15000, photo: "photo0.png" },
      'tarif': '35000',
      'dateLivraison': '18/07/2022',
    }
  ];
  constructor() { }

  coucou(nom) {
    console.log('Coucou ' + nom + ' !!!');
    alert('Coucou ' + nom + ' !!!')
  }

}
