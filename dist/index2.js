"use strict";
console.log('Hello TypeScript!');
// Implicit Types
let helloWorld = 'Hello, World';
// helloWorld = 5; // Error
// Explicit Types
let firstName = 'John';
let age = 30;
let x = ['Hello', 10];
// let y: stringAndNumber = ["Hello", "World"]; // Error
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
// Enum usage
var region = Continents.Africa; // 2
const user = {
    name: 'John',
    id: 0,
};
const windowState = 'minimized';
const odd = 5;
const getLength = (param) => {
    // string[] can be replaced with number[], any[]
    return param.length;
};
getLength('test'); // 4
getLength(['test', 'test1']); // 2
// getLength(5); // Error
