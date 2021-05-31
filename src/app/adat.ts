export class MyAdat {
  /*mandal: number;
  sukta: number;
  sungby: string;
  sungbycategory: string;
  sungfor: string;
  sungforcategory: string;

  constructor(mandal: number, sukta: number, sungby: string, sungbycategory: string, sungfor: string, sungforcategory: string) {
    this.mandal = mandal;
    this.sukta = sukta;
    this.sungby = sungby;
    this.sungbycategory = sungbycategory;
    this.sungfor = sungfor;
    this.sungforcategory = sungforcategory;
  }*/
  word: string;
  nagari: string;
  description: string;
  category: string;


  constructor(word: string, nagari: string, description: string, category: string) {
    this.word = word;
    this.nagari = nagari;
    this.description = description;
    this.category = category;
  }
}
