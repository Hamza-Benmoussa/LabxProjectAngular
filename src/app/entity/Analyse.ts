import {EchantillonRequest} from "./EchantillonRequest";
import {Utilisateur} from "./Utilisateur";
import {TypeAnalyse} from "./TypeAnalyse";
import {StatusAnalyse} from "./StatusAnalyse";

export interface Analyse {
  id: number;
  echantillon: EchantillonRequest;
  nom: string;
  utilisateurTechnicien: Utilisateur;
  dateDebutAnalyse: number;
  dateFinAnalyse: number;
  statusAnalyse: StatusAnalyse;
  commentaires: string;
  typeAnalyse:TypeAnalyse[];
}
