import {EchantillonRequest} from "./EchantillonRequest";
import {MaterialEchan} from "./MaterialEchan";

export interface EchantillonMaterial {
  id:number;
  echantillon: EchantillonRequest;
  materielEchan:MaterialEchan;
  quantity: number;
}

