// 1           2        3
let username: string = 'Chase';
let password: string = 'password';
let id: number = 5;
// 1 declare a variable
// 2 declare the variable's data type
// 3 initialize the variable with a value

let phoneNumber: number;
let email: string;
let ssn: number;
let isMarried: boolean;

// STRING
let companyName: string;
companyName = 'EFA';

// NUMBER
let age: number = 34;
let currentYear: number = 2021;

// BOOLEAN
let isLoggedIn: boolean = true;

// ARRAY
let studentList: string[] = ['Kasey', 'Jason', 'Matt'];

let allScores: Array<number> = [2, 3000, -10]

// ANY
let data: any = '12345'
console.log(data)
console.log(typeof data)

data = 12345;
console.log(data)
console.log(typeof data)

// VOID
function sayHello(): void{
    console.log('hello');
    
}

// NULL AND UNDEFINED
let undefinedThing: undefined = undefined;
let nullThing: null = null;

// TUPLE
let nameAndId: [string, number];
nameAndId = ['userOne', 1]

// ENUM
enum WeaponType {Sword, Saber, Spear};
let weapon: WeaponType = WeaponType.Sword;
let weaponTwo: WeaponType = WeaponType.Spear;

enum CardType{Ace = 1, Two, Three, Four};
let newCard: string = CardType[2];
console.log(newCard)