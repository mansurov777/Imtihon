class BankHisobi {
        constructor(hisob_raqami, egasi_ismi, balans) {
        this.hisob_raqami = hisob_raqami;
        this.egasi_ismi = egasi_ismi;
    }
    #balans = 0;
    pul_qoshish(summa) {
        this.#balans += summa ;
        console.log(summa + ' sum hisobingizga qoshildi');
    }
    pul_yechish(summa) {
        if(this.#balans <= summa) {
            this.#balans -= summa ;
            console.log(summa + ' sum hisobingizdan pul yechildi');
        }
        else{
            console.log("Mablag' yetarli emas");
        }
    }
    balans_korish() {
        console.log("Joriy balans: ", this.#balans , "sum");
        
    }
}
let hisob1 = new BankHisobi (256656, 'Muhammad', 100000000);
hisob1.balans_korish();
hisob1.pul_qoshish(500000);
hisob1.pul_yechish(300000);
hisob1.pul_yechish(20000000);
hisob1.balans_korish();