import {EchantillonRequest} from "./EchantillonRequest";
import {Utilisateur} from "./Utilisateur";
import {TypeAnalyse} from "./TypeAnalyse";

export interface Analyse {
  id: number;
  echantillon: EchantillonRequest;
  nom: string;
  utilisateurTechnicien: Utilisateur;
  dateDebutAnalyse: number;
  dateFinAnalyse: number;
  statusAnalyse: string;
  commentaires: string;
  typeAnalyse:TypeAnalyse[];
}
