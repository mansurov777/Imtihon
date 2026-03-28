class Kitob {
  constructor(nomi, muallif, sahifalar_soni) {
    this.nomi = nomi;
    this.muallif = muallif;
    this.sahifalar_soni = sahifalar_soni;
  }

  info() {
    console.log("Kitob nomi:", this.nomi);
    console.log("Muallif:", this.muallif);
    console.log("Sahifalar soni:", this.sahifalar_soni);
  }
}

const kitob1 = new Kitob("O'tgan kunlar", "Abdulla Qodiriy", 320);
kitob1.info();