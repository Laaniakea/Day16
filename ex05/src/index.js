class Microsoft {
    constructor(name) {
        this.name = name;
    }
    getter() {
        return this.name;
    }
    setter(name) {
        this.name = name;
    }
    occupation(){
        return `${this.name} is a philanthropist!`;
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age=age;
    }
    studentAge(){
        return `${this.name} is ${this.age}`;
    }
}
const henry = new Microsoft("William Henry Gates III");
henry.occupation();

const elliot= new Facebook("Mark Elliot Zuckerberg",23);
elliot.occupation();
elliot.studentAge();

module.exports = {
    Microsoft,
    Facebook
}