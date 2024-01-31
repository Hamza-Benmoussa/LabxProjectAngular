import {Patient} from "./Patient";
import {Utilisateur} from "./Utilisateur";

export interface Echantillon {
  id: number;
  nomAnalyse: string;
  patient: Patient;
  utilisateurPreleveur: Utilisateur;
  datePrelevement: string;
}
