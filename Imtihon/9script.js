const user = {
    name: "Samariddin",
    age: 19,
    isActive: true,
    greet: function() {
        console.log(`Salom, men ${this.name}, ${this.age} yoshdaman`);
    }
};

user.greet();