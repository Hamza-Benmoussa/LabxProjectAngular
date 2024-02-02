import {RoleUser} from "./RoleUser";

export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  motDePasse: string;
  role: RoleUser;
}
