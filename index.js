// Задание 1

/*const arr = [1, 2, 3, 4, 5,6,7,8,9,10];
const reversedArr = [];
                                      
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr[reversedArr.length] = arr[i];
}

console.log(reversedArr);*/


// Задание 2

/*const arr = [1, 2, 3];
const element = 'begin';

const newArr = [element];
for (let i = 0; i < arr.length; i++) {
  newArr[i + 1] = arr[i];
}

for (let i = 0; i < newArr.length; i++) {
  arr[i] = newArr[i];
}

console.log(arr);
*/



// Задание 3
const myObj = {
  name: 'Rauf',
  surname: 'Baghirov',
  group: 233,
  country:"Azerbaijan",
  city:"Baku",
  district:"Khatai"
};

const enteredFields = [];
const existingFields = [];
const missingFields = [];

const maxAttempts = 10;

for (let i = 0; i < maxAttempts; i++) {
  const userInput = prompt("Введите название поля");
  enteredFields.push(userInput);

  if (myObj.hasOwnProperty(userInput)) {
    existingFields.push(userInput);
  } else {
    missingFields.push(userInput);
  }
}

console.log('Поля, которые были в объекте:', existingFields);
console.log('Поля, которых не было в объекте:', missingFields);






    