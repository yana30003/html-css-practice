// let person = {
//     name: "Alex",
//     sayHello: function () {
//         console.log("hello" + this.name)
//     }

// }
// person.sayHello()


// let person2 = {
//     name: "David",
//     address: {
//         street: "5th avenue",
//         displayThis: function () {
//             console.log(this)
//         }
//     }
// }
// person2.address.displayThis()
// let car = {
//     introduce: function (year) {
//         console.log(this.color + this.model + this.engineSize + year)
//     }
// }
// let car2 = {
//     color: "silver",
//     model: "Toyota",
//     engineSize: 2.0
// }
// car.introduce.call(car2, 2010)
// let person1 = {
//     name: "Alex",
//     greet: function (otherName) {
//         return "hi" + otherName + "my name is" + this.name + "nice to meet you"
//     }

// }
// let person2 = {
//     name: "Kate",
// }
let student = {
    name: "Maya",
    lastName: "Smith",
    favColor: "red",
    hobby: "soccer",
    age: "25",
    deleteInfo: function () {
        console.log(arguments)
        for (let i = 0; i < arguments.length; i++) {
            delete this[arguments[i]]

        }
    }
}