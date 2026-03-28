class Mahsulot {
    constructor(nomi, narxi, soni){
        this.nomi = nomi;
        this.narxi = narxi;
        this.soni = soni;
    }
    umumiy_qiymat() {
        return this.narxi * this.soni;
    }
}
let mahsulot1 = new Mahsulot('Olma', 25000, 25);
let mahsulot2 = new Mahsulot('Banan', 50000, 18);
let mahsulot3 = new Mahsulot('Ananas', 150000, 3);

console.log(mahsulot1.nomi, ' umumiy qiymati: ', mahsulot1.umumiy_qiymat);
console.log(mahsulot2.nomi, ' umumiy qiymati: ', mahsulot2.umumiy_qiymat);
console.log(mahsulot3.nomi, ' umumiy qiymati: ', mahsulot3.umumiy_qiymat);