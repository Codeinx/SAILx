// class Student {
//     constructor(fName, age) {
//         this.age = age;
//         this.fName = fName;
//     }

//     // year = 2024

//     display() {
//         console.log(`This is ${this.age} and he/she is ${this.fName} years old.`);
//     };

//     yearOfBirth() {
//         new Date.now
//     };
// }

// const teni = new Student("Ganiyu", "45");
// teni.display();

// let writeIn = document.getElementById("receive")
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     };

//     display() {
//         let print = (`This is a ${this.year} ${this.brand} ${this.model}`);
//         writeIn.textContent = print;
//         return print;
//     };
// }

// let brand = prompt("Enter Car Brand");
// let model = prompt("Enter Brand Model");
// let year = prompt("Enter Model Year");
// const xmd = new Car(brand, model, year  );
// console.log(xmd.display());
// console.log(this);

// class Motor {
//     model = "MayBach"
//     year = "2024"
//     color = "Cockroach-Brown"
    
//     drive() {
//         console.log("The car is in Drive mode");
//     }
//     park() {
//         console.log("The car is in Park mode");
//     }
//     reverse() {
//         console.log("The car is in Reverse mode");
//     }
//     neutral() {
//         console.log("The car is in Neutral mode");
//     }
// }

// class Person {
//     name
//     age
//     gender
//     static noOfPerson = 0
//     hobbies = []
//     constructor(name, age, gender, hobbies) {
//         this.age = age 
//         this.name = name 
//         this.gender = gender 
//         this.hobbies = hobbies 
//         Person.noOfPerson += 1
//     }

//     static desc() {
//         return `I have ${Person.noOfPerson} person(s)`
//     }

//     get getHobbies() {
//         return this.hobbies
//     }
    
//     set setHobbies(hobby) {
//         return this.hobbies.push(hobby)
//     }
// }

// let p1 = new Person("Lizzy", 12, "F", "Cycling, Rioting")
// let p2 = new Person("Xcel", 18, "M", "Leading, Singing")
// console.log(p1.getHobbies);
// console.log(Person.desc());
// Person.noOfPerson

//The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

class Car {
    constructor(power){
        this._fuel = 35
        this._power = power
    }

    get power() {
        return `${this._power} hp`
    }

    get fuel() {
        return `${this._fuel}, ${(this._fuel/70)*100}%`
    }

    set fuel(value) {
        if (value > 70) {
            value = 70
        }
        if (value < 0) {
            value = 0
        }
        this._fuel = value
    }
}

let toyota = new Car(200)
toyota.fuel = 40
console.log(toyota.fuel);