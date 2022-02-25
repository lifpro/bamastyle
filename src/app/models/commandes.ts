import { Catalogues } from "./catalogues";
import { Clients } from "./clients";

export class Commandes {
    catalogue: Catalogues;
    client: Clients;
    dateCommande: Date;
    dateLivraison: Date;
    montant: number;
}
