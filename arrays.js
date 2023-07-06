// const arr =
//     [{ name: 'roy', age: 25, category: 'first' },
//     { name: 'vinay', age: 28, category: 'second' },
//     { name: 'ram', age: 30, category: 'first' },
//     { name: 'syam', age: 'a', category: 'second' },
//     { name: 'ronit', age: 20, category: 'first' },
//     { name: 'jem', age: 33, category: 'second' }];
// let sumCatFirst = arr
//     .filter(person => person.category === "first" && typeof person.age === "number")
//     .reduce((sum, person) => sum + person.age, 0)
// let sumNoSyam = arr
//     .filter(person => person.name !== "syam" && typeof person.age === "number")
//     .reduce((sum, person) => sum + person.age, 0);

// const arr1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']; // output { apple: 3, banana: 2, orange: 1}
// const arr2 = arr1.reduce()

// const arr3 = ['Hello', 'WORLD', 'OpenAI', 'ChatBot'];
// const uppercaseArr = arr3.map(element => element.toUpperCase());
// const lowercaseArr = arr3.map(element => element.toLowerCase())
let array =['APPLe', 'BanAna', 'ORanGE', 'gRape'];
let  array2=array.map(element=>{
	console.log('element', element.split(''))
  let subEle = element.split('');
  subEle = subEle.map((item) => {
  	if(/[A-Z]/.test(item)){
    	return item.toLowerCase()
    } else {
    	return item.toUpperCase()
    }
  })
	return subEle.join('')
})

console.log('array2', array2)


const string = 'Hello, World';
 
let optput = {
};

for(let letter of string){
    console.log('item', 'index', letter);
 if(optput.hasOwnProperty(letter.toLowerCase())){
     optput[letter.toLowerCase()] += 1; 
 } else {
     optput[letter.toLowerCase()] = 1; 
 }
}

console.log('optput', optput)


