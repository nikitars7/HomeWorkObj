let menu = {
   width: 200,
   height: 300,
   title: 'My Menu',
};

console.log(menu);

function multiplyNumeric(obj) {
   for (let item in obj) {
      if (typeof obj[item] === 'number') {
         obj[item] *= 2;
      }
   }
}

multiplyNumeric(menu);

console.log(menu);

