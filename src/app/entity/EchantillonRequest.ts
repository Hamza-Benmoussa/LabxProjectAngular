import {Patient} from "./Patient";
import {Utilisateur} from "./Utilisateur";
import {EchantillonMaterial} from "./EchantillonMaterial";
import {MaterialEchan} from "./MaterialEchan";

export interface EchantillonRequest {
  id: number;
  patient: Patient;
  utilisateurPreleveur: Utilisateur;
  nomAnalyse: string;
  datePrelevement: string;
  echantillonMaterials: EchantillonMaterial[];
}
