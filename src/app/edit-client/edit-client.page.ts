import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clients } from '../models/clients';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {
  idClient: string;
  cl: Clients;
  clients: {
    id: number, nom: string, numero: number,
    adresse: string,
    longeur: number,
    epaule: number,
    manche: number,
    poitrine: number,
    hanche: number,
    cou: number,
    bras: number,
    poignet: number,
    pantalon: number,
    jupe: number
  }[] = [
      { id: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 3, nom: "Adboulkarim SIDIBE", numero: 76887654, adresse: "Yirimadjo", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 4, nom: "Moussa DEMBELE", numero: 76887654, adresse: "Medina", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
      { id: 5, nom: "Djénaba BA", numero: 76887654, adresse: "Missira", longeur: 0, epaule: 0, manche: 0, poitrine: 0, hanche: 0, cou: 0, bras: 0, poignet: 0, pantalon: 0, jupe: 0 },
    ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let idClient = this.route.snapshot.paramMap.get('id');
    this.cl = this.clients.find(function (c) {
      return c.id == parseInt(idClient);
    })
  }

}
