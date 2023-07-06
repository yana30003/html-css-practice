// function getTodos() {
//     return new Promise(function (resolve, reject) {
//         let result = new XMLHttpRequest()
//         result.addEventListener("readystatechange", function () {
//             if (result.readyState === 4) {
//                 let data = JSON.parse(result.responseText)
//                 console.log(result.responseText)
//             }
//         })
//         result.open("GET", "https://jsonplaceholder.typicode.com/todos/")
//         result.send("")
//     })

// }
// getTodos()
// let userContainer = document.querySelector(".container")
// fetch("https://jsonplaceholder.typicode.com/users/")
//     .then(function (response) {
//         console.log(response)
//         return response.json()
//     }
//     )
//     .then(function (data) {
//         console.log(data)
//         data.forEach(element => {
//             userContainer.innerHTML += `<h2>${element.name}</h2>`
//         });

//     })
// let request = new XMLHttpRequest()
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
// request.send()
// request.addEventListener("readystatechange", function () {
//     if (request.readyState === 4 && request.status == 200) {
//         console.log(request)
//         console.log(request.responseText)
//     } else if (request.readyState === 4) {
//         console.log("something went wrong")
//     }

// })
async function getTodos(){
   let result=await fetch("https://jsonplaceholder.typicode.com/todos/")
    
}
