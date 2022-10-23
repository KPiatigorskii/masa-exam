// Write a method in JS/TS that gets as an argument an array of numbers and returns the sum of all array members

const sumArray = (array: number[]): number => {
    let summ: number = 0;
    array.forEach((value) => {
        summ += value
    })
    return summ;
}

let summ = sumArray([1,2,3,4,3,4])
console.log(summ)