// Question No 2

class AutoMobile {
    constructor (name, model,color,type) {
        this.name = name ;
        this.model = model ;
        this.color = color;
        this.type = type ;
    }

    start (){};
    openDoor(){};
    
} 

class Car extends AutoMobile {
     constructor (name,model,color,type){
        super(name,model,color,type);
        this.name = "Tesla" ;
        this.model = "Model-S" ;
        this.color = "Red";
        this.type = "Automatic" ;
     }

    features (){
        console.log(
        `Range : 600km
        Top-Speed : 322km/h
        Peak-Power : 1,020 hp
        Doors : Automatic opening`)
    }

    start(){
        super.start()
        console.log(`${this.name} is ready to drive`)
    }

    openDoor (){
        super.openDoor()
        console.log(`${this.name} opens the doors automatically`)
    }
}
class Bus extends AutoMobile {
     constructor (name,model,color,type){
        super(name,model,color,type);
        this.name = "HinoPak" ;
        this.model = "x500" ;
        this.color = "grey";
        this.type = "Manual" ;
     }

    features (){
        console.log(
        `Range : 1800km
        Top-Speed : 3422km/h
        Peak-Power : 2,020 hp
        Doors : Automatic opening`)
    }

    start(){
        super.start()
        console.log(`${this.name} is ready to drive`)
    }

    openDoor (){
        super.openDoor()
        console.log(`${this.name} opens the doors automatically`)
    }
}
class Truck extends AutoMobile {
     constructor (name,model,color,type){
        super(name,model,color,type);
        this.name = "Tesla" ;
        this.model = "Model-x" ;
        this.color = "White";
        this.type = "Automatic" ;
     }

    features (){
        console.log(
        `Range : 1200km
        Top-Speed : 100km/h
        Peak-Power : 2,000 hp
        Doors : Automatic opening`)
    }

    start(){
        super.start()
        console.log(`${this.name} is ready to drive`)
    }

    openDoor (){
        super.openDoor()
        console.log(`${this.name} opens the doors automatically`)
    }
}

const autoMobile = new AutoMobile;
const car = new Car;
const bus = new Bus;
const truck = new Truck;

// For Car
console.log(car.start())
console.log(car.features())
console.log(car.openDoor())

// Car properties
console.log(car.name)
console.log(car.model)
console.log(car.type)
console.log(car.color)

// For Bus
console.log(bus.features())
console.log(bus.start())
console.log(bus.openDoor())

// Bus properties

console.log(bus.name)
console.log(bus.model)
console.log(bus.type)
console.log(bus.color)

// For Truck
console.log(truck.start())
console.log(truck.features())
console.log(truck.openDoor())

// Truck properties

console.log(truck.name)
console.log(truck.model)
console.log(truck.type)
console.log(truck.color)

//Question No 1 

class PersonAccount{
    constructor (firstName , lastName , incomes , expenses){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes ;
        this.expenses = expenses ;

    }

    totalincome () {
      return this.incomes ;
    }

    totalExpense () {
        return this.expenses ;
    }

    addIncome (){
        return this.incomes * 2 ;
    }

    accountBalance () {
        return this.expenses*10 ;
    }


}

const personAccount = new PersonAccount("Mr","X",10,5);
const income = {
    inCome : "inCome",
    description : "description"
}

const expense = {
    exPenses : "exPenses",
    description : "description"
}

const arr = [personAccount,income,expense];
console.log(arr) 
