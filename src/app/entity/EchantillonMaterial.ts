import {Echantillon} from "./Echantillon";

export interface EchantillonMaterial {
  echantillon: Echantillon;
  materielEchan: {
    id: number;
    nomEchan: string;
    quantiteStockEhcna: number;
    dateExpirationEchan: string;
    fournisseurNom: string;
  };
  quantity: number;
}

