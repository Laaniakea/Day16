class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
        function walk() {
            var numberOfLegs = `${this.name} is walkin ${numberOfLegs} legs`;
            return numberOfLegs;
        }
    }
}
class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;


        function bark() {
            var dogSay = `${this.name} says WUF-WUF`;
            return dogSay;
        }
    }
}
    const dog = new Dog(name, legs);
    console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}.