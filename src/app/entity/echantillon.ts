import {EchantillonMaterial} from "./EchantillonMaterial";
import {Patient} from "./Patient";


export class Echantillon {
  constructor(id : number,
  patient: Patient,
  datePrelevement: string,
  nomAnalyse: string,
  echantillonMaterials: EchantillonMaterial[]
  )
{
   this.id = id;
   this.datePrelevement =datePrelevement;
   this.nomAnalyse=nomAnalyse;
   this.patient =patient;
   this.echantillonMaterials= echantillonMaterials;
}

               id : number;
              patient: Patient;
              datePrelevement: string;
              nomAnalyse: string;
              echantillonMaterials: EchantillonMaterial[]
}
