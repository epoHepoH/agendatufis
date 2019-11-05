export class Contatto {
  nome: string;
  cognome: string;
  mail: string;
  cellulare: string;
  nrStelle: number;

  constructor (nome: string, cognome: string, mail: string, cellulare: string, nrStelle: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.mail = mail;
    this.cellulare = cellulare;
    this.nrStelle = nrStelle;
  }

  getNomeCompleto(): string{
    return this.nome + " " + this.cognome;
  }
}