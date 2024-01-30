// In your Angular application
import {Echantillon} from "./echantillon";
import {MaterialEchan} from "./MaterialEchan";



export class EchantillonMaterial {
  id: number;
  echantillon: Echantillon;
  materielEchan: MaterialEchan;
  quantity: number;
  deleted: boolean;

  // Assuming you need a constructor
  constructor(id: number, echantillonId: Echantillon, materielEchanId: MaterialEchan, quantity: number, deleted: boolean) {
    this.id = id;
    this.echantillon = echantillonId;
    this.materielEchan = materielEchanId;
    this.quantity = quantity;
    this.deleted = deleted;
  }
}
