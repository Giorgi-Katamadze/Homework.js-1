let age = prompt("მიუთითეთ თქვენი ასაკი")

if (age<18){
 alert("ჩემი პატარა ბიჭი")
}
else if (age>=18 && age<=50){
    alert("კაცი ხარ კაცური")
}

else if (age>50){
    alert("BOOMER")
}
const arr = [1, 4, 18, 24, 15, 2, 3, 19, 55]
let max = Math.max(...arr)
let min = Math.min(...arr)
const even = [];
const odd = [];

arr.forEach(number => {
  if (number % 2 === 0) {
    even.push(number);
  }
});

arr.forEach(number => {
  if (number % 2 !== 0) {
    odd.push(number);
  }
});

console.log(max)
console.log(min)
console.log(even);
console.log(odd)