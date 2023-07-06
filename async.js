async function getComment() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log(data)
    let userContainer = document.querySelector(".container")
    data.forEach((user) => {
        userContainer.innerHTML += `<h3>${user.username}</h3> <p>${user.email}</p>`

    })
    if (response.status !== 200) {
        let myHeading = document.querySelector("h1")
        myHeading.innerText = "something went wrong"
        throw new Error("something went wrong")
        document.querySelector
    }
    return response
}
// fetch("https://jsonplaceholder.typicode.com/comments!!")
//     .then((response) => {
//         console.log(response)
//         if (response.status !== 200) {
//             throw new Error("something went wrong")
//         }

//     })
//     .catch((error) => {
//         let myHeading = document.querySelector("h1")

//         myHeading.innerText = error.message
//         console.log(error)
//     })
getComment()
//     .then((data) => {

//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })