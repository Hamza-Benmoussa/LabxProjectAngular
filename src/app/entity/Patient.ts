export class Patient {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public dateNaissance: string,
    public sexe: string,
    public adresse: string,
    public numeroTelephone: string
  ) {}
}
