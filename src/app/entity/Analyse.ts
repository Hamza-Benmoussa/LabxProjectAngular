import {Echantillon} from "./Echantillon";
import {Utilisateur} from "./Utilisateur";

export interface Analyse {
  id: number;
  echantillon: Echantillon;
  nom: string;
  utilisateurTechnicien: Utilisateur;
  dateDebutAnalyse: number;
  dateFinAnalyse: number;
  statusAnalyse: string;
  commentaires: string;
}
