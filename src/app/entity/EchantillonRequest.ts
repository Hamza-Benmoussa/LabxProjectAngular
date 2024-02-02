import {Patient} from "./Patient";
import {Utilisateur} from "./Utilisateur";
import {EchantillonMaterial} from "./EchantillonMaterial";

export interface EchantillonRequest {
  id: number;
  patient: Patient;
  utilisateurPreleveur: Utilisateur;
  nomAnalyse: string;
  datePrelevement: string;
  echantillonMaterials: EchantillonMaterial[];
}
