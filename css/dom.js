function myFunction(event) {
    console.log("my function fired")
    console.log(event.target.dataset.id)
}
function secondFunction(event) {
    console.log(event.target.nextElementSibling.innerText)

}
myContainer = document.querySelector(".container")
myContainer.innerHTML += `<ol> 
<li>item1</li>
</ol>`
