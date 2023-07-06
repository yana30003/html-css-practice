let numberList = [3, 445, 3, 11, 23, 4, 6, 7, 67, 8, 8];

console.log('max number', Math.max(...numberList))

let total = 0;
let maxNumber = 0;


/* numberList.forEach((item) => {
  total += item
}) */


let totalOfNumber = numberList.map((item) => {
    total += item;
    if (item > maxNumber) {
        maxNumber = item
    }
    return item
})

console.log('totalOfNumber', totalOfNumber, 'total', total, 'maxNumber', maxNumber)

/* for(let item of numberList){
   total += item
} */


//console.log('total', total)

/* let totalSum = numberList.reduce((sum, item) => {
  return sum += item
}, sum = 0) 

console.log('totalSum', totalSum)
*/

let testArr = [];

testArr.push('testing');
testArr.push('testing2');


console.log('testArr', testArr)

testArr.pop();
console.log('testArr2', testArr)

console.log('check includes', [2, 3, 45].includes(45))
console.log('check includes2', [2, 3, 45].includes(345))

console.log('check indexOf', [2, 3, 45].indexOf(45))
console.log('check indexOf2', [2, 3, 45].indexOf(345))






/* let user = {
  firstName: 'testing fisrt',
  test: 'test'
}

user.lastName = 'last name'
user['lastName2nd'] = 'last name 2nd'


console.log('t1', user.firstName)
console.log('t2', user['firstName'])
console.log('t3', user)

for(let item in user){
  console.log('key', item, 'value', user[item] )
} 
delete user.test

console.log('t4', user)
*/


let userList = [
    {
        firstName: 'user1',
        status: true
    },
    {
        firstName: 'user2',
        status: false
    },
    {
        firstName: 'user3',
        status: true
    }
]




console.log('userList y1', userList[0].firstName)
console.log('userList y2', userList[0]['firstName'])

console.log('userList y3', userList.filter((item) => item.status === true))


console.log('userList y4', userList.find((item) => item.firstName == 'user1'))
console.log('userList y5', userList.find((item) => item.firstName == 'user11'))


// < div > Remove duplicate numbers from the sorted array</div >

let test = [1, 1, 2, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

test.forEach((item) => {
    if (!uniqueArr.includes(item)) {
        uniqueArr.push(item)
    }
})


let unique = [...new Set(test)];

let uniqueByReduce = test.reduce((uniq, item) => {
    if (uniq.indexOf(item) < 0) {
        uniq.push(item)
    }
    return uniq
}, uniq = [])

console.log('uniqueByReduce', uniqueByReduce)
console.log('uniqueArr', uniqueArr)

console.log('unique', unique)

function removeSortedDuplicates(nums) {
    debugger;
    const uniqeNums = nums.filter((num, index) => {
        let temp = num !== nums[index - 1]
        return temp;
    })
    return uniqeNums;
}

console.log('uniqueNumberArray', removeSortedDuplicates(test))

const unsrotedArray = [3, 2, 1, 2, 1, 4, 1, 5];

function removeUnsortedDuplicates(nums) {
    const uniqeNums = nums.filter((item, index) => {
        return nums.indexOf(item) === index;
    })
    return uniqeNums;
}

console.log('unsroteduniqeArray', removeUnsortedDuplicates(unsrotedArray));



/*
//descending order
let array1=[2,5,3,6,1,4,5,2,1]
array1.sort((a,b)=> b - a);
 console.log(array1) */

/*
//ascending order
let array1=[2,5,3,6,1,4,5,2,1]
array1.sort((a,b)=> a - b);
 console.log(array1) 
 */


/* let array1=['b', 'a', 'e', 'f', 'z', 'c']
array1.sort();
 console.log(array1) */
