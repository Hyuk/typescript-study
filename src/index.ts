// Basic Types
let id: number = 5
let company: string = 'smilehugo'
let isPublished: boolean = true
let y: any = 'Hello'
let ages: number

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left)

// Object
// const user2: {
//   id: number,
//   name: string,
// } = {
//   id: 2,
//   name: 'Daniel'
// }

// Type 부분을 먼저 정의를 하는 형태로 다시 적으면
type User2 = {
  id: number
  name: string
  age?: number // optional
}

const user2: User2 = {
  id: 3,
  name: 'Jack',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number // can't change the value
  name: string
  age?: number // optional
}

const user1: UserInterface = {
  id: 1,
  name: 'hyuk',
}

// user1.id = 5 // Error

// type vs interface

type Point = number | string // can't use interface
const pi: Point = 1

// Interface with function
interface MathFunc {
  (x: number, y: number): number
}

// const add: MathFunc = (x: number, y: string): number => x + y
const add: MathFunc = (x: number, y: number): number => x + y

interface PersonInterface {
  id: number
  name: string
  age?: number
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number // private, protected, readonly
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    console.log(123)
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// when id is private, gives an error
// console.log(brad.id)
//console.log(brad.id)

console.log(brad.register())

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shown', 'Developer')

console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
  // T = type
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

numArray.push(5)
strArray.push('Hugo')
