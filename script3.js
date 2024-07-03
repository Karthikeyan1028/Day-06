//3//written a Program to create person class
class Person{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    toString(){
        console.log (`Name: ${this.name}`);
        console.log (`Age: ${this.age}`);
        console.log (`City: ${this.city}`); 
    }
}

const person1= new Person('Karthikeyan',26,'Ariyalur');
const person2= new Person("Gopika",20,"Chennai");

console.log("person-1 Details:");
person1.toString();
console.log("person-2 Details:");
person2.toString();
