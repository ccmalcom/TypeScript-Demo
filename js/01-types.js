// 1           2        3
let username = 'Chase';
let password = 'password';
let id = 5;
// 1 declare a variable
// 2 declare the variable's data type
// 3 initialize the variable with a value
let phoneNumber;
let email;
let ssn;
let isMarried;
// STRING
let companyName;
companyName = 'EFA';
// NUMBER
let age = 34;
let currentYear = 2021;
// BOOLEAN
let isLoggedIn = true;
// ARRAY
let studentList = ['Kasey', 'Jason', 'Matt'];
let allScores = [2, 3000, -10];
// ANY
let data = '12345';
console.log(data);
console.log(typeof data);
data = 12345;
console.log(data);
console.log(typeof data);
// VOID
function sayHello() {
    console.log('hello');
}
// NULL AND UNDEFINED
let undefinedThing = undefined;
let nullThing = null;
// TUPLE
let nameAndId;
nameAndId = ['userOne', 1];
// ENUM
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
let weapon = WeaponType.Sword;
let weaponTwo = WeaponType.Spear;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
;
let newCard = CardType[2];
console.log(newCard);
//# sourceMappingURL=01-types.js.map