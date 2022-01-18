console.log('Hello TypeScript!')

// Implicit Types
let helloWorld = 'Hello, World'

// helloWorld = 5; // Error

// Explicit Types
let firstName: string = 'John'
let age: number = 30

// firstName = 5;
// age = 'name';

// Built-in Types
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Tuple
type stringAndNumber = [string, number]

let x: stringAndNumber = ['Hello', 10]

// let y: stringAndNumber = ["Hello", "World"]; // Error

// Enums
enum Continents {
  North_America, // 0
  South_America, // 1
  Africa, // 2
  Asia, // 3
  Europe, // 4
  Antartica, // 5
  Australia, // 6
}

// Enum usage
var region = Continents.Africa // 2

// Interface
interface User {
  name: string
  id: number
}

const user: User = {
  name: 'John',
  id: 0,
}

// const user1: User = {
//   name: 'Mike',
//   id: 1,
//   age: 25,
// }

// Composing types -> Union
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9

const windowState: WindowStates = 'minimized'

const odd: OddNumberUnderTen = 5

const getLength = (param: string | string[]) => {
  // string[] can be replaced with number[], any[]
  return param.length
}

getLength('test') // 4
getLength(['test', 'test1']) // 2

// getLength(5); // Error
