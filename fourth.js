function sortByAge(arr) {
   arr.sort((a, b) => a.age - b.age);
}

let arr = [
   { name: 'User1', age: 25 },
   { name: 'User2', age: 30 },
   { name: 'User3', age: 28 },
];

sortByAge(arr);

console.log(arr);
