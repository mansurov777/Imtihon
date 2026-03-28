class Transport {
    constructor(nomi, tezligi) {
        this.nomi = nomi;
        this.tezligi = tezligi;
    }
    harakatlanish(){
        console.log(this.nomi + '' + this.tezligi + 'km/soat tezlikda harakatlanmoqda.');
        
    }
}
class Avtomabil extends Transport {
    constructor(nomi, tezligi, yoqilgi_turi) {
        super(nomi, tezligi);
        this.yoqilgi_turi = yoqilgi_turi;
    }
    signal_berish() {
        console.log(this.nomi + ' signal bermoqda: pup-pup');
        
    }
}
class Mototsikl extends Transport {
    constructor(nomi, tezligi, gildirak_soni) {
        super(nomi, tezligi);
        this.gildirak_soni = gildirak_soni;
    }
  gildirak_info() {
    console.log(this.nomi + " ning g'ildiraklari soni: " + this.gildirak_soni);
  }
}

const avto = new Avtomobil("Toyota", 180, "Benzin");
avto.harakatlanish();
avto.signal_berish();

const moto = new Mototsikl("Yamaha", 200, 2);
moto.harakatlanish();
moto.gildirak_info();