class Talaba {
    constructor(ism, familiya, yosh, guruh) {
        this.ism = ism;
        this.familiya = familiya;
        this.yosh = yosh;
        this.guruh = guruh;
    }
    info() {
        console.log('Ismi: ', this.ism);
        console.log('Familiyasi: ', this.familiya);
        console.log('Yoshi: ', this.yosh);
        console.log('Guruhi: ', this.guruh);
    }
}
let talaba1 = new Talaba('Muhammad', 'Ibragimov', 20, 411);
talaba1.info()