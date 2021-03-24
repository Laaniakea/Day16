class Person{
   
static display(){
    var message ="Static method is invoked from Person class";
    return message;
}
    static show(){
        display();
        alert;
        console.log(message);
    }
}



var message = new Person();
message.show();
module.exports=Person;