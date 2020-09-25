const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var count = 0

// For in
for (i in numArr) {
  count += numArr[i]
  console.log(count)
}

// Anonymous function
count = 0

numArr.forEach(function (num) {
  count += num
});
console.log(count)

// Arrow function
count = 0
numArr.forEach(num => count += num)
console.log(count)

// Square 5 numbers in an array
count = 0
const newArr = [1, 2, 3, 4, 5]

var sqArr = []

for (i in newArr) {
  var arrElement = Math.pow(newArr[i], 2)
  sqArr.push(arrElement)
}

// Using map
const sqArr2 = newArr.map(num => Math.pow(num, 2))
console.log(sqArr2)

// Arthematic mean of random number sequence
const arr_length = 10

const randomArr = Array.from(Array(arr_length)).map(num => Math.random())
console.log(randomArr)

// My solution
var numArrNum = 0

const randomNumArr = Array.from(Array(10)).map(num => Math.random())

for (i in randomNumArr) {
  numArrNum += randomNumArr[i]
}

console.log(numArrNum / randomNumArr.length)

// Rishov's solution
function num_mean(x) {
  let num_sum = x.reduce((a, b) => a+b)
  return num_sum / x.length
}

console.log(num_mean(randomNumArr));

// Find the square differences of each number from its Mean

// My solution
let sqDiff = randomNumArr.map(num => (num - num_mean(randomNumArr))**2)

console.log(sqDiff)

// Rishov's solution
const spDif = randomNumArr.map(num => Math.pow(num - num_mean(randomNumArr), 2))
console.log(spDif);
