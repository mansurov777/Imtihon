function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
    this.accelerate = function(amount) {
        this.speed += amount;
        console.log(`${this.brand} tezligi endi ${this.speed} km/soat`);
    };
}

const myCar = new Car("Toyota", 50);
myCar.accelerate(20);
myCar.accelerate(15);