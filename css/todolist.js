let tableStorage = [];

let inputClick = document.getElementsByClassName('inputBttn')[0];
inputClick.addEventListener("click", function () { addTask() });

function addTask() {
    let inputData = document.getElementById("tableInput");
    let inputTemp = inputData.value;
    if (inputTemp) {
        tableStorage.push(inputTemp)
    }
    console.log("inputTemp", tableStorage)
    showTable(tableStorage);
}

function showTable(tableListData) {
    console.log("tableListData", tableListData)
    let tableList = document.getElementsByClassName('tableData')[0];
    tableList.innerHTML = "";
    let move = "";
    tableListData.forEach((item, index) => {
        move += `<li class="taskWrap">${item}</li>`
    });
    console.log('move', move);
    tableList.innerHTML = move;
}
// console.log("tableListData", tableListData)
// let tableList = document.getElementsByClassName('tableData')[0];
// tableList.innerHTML = "";
// let move = "";
// tableListData.forEach((item, index) => {
//   move +=
//     `<li class="taskWrap">${item} 
//    <div class="taskItem">
//         <button class="delete" data-id="${index}">Delete</button>
//         <button class="edit" data-id="${index}">Edit</button>
//    </div>
//     <div class="editWrap">
//         <input class="taskInput" name='' data-id="${index}" id="" value="${item}">
//       <button class="editEvent" data-type="save">Save</button>
//           <button class="editEvent" data-type="cancle">Cancle</button>
//     </div>
// </li> `
//   console.log('move', move);
// });
// tableList.innerHTML = move;
// deletBttn();
// }

// function deletBttn() {
// let deleteRow = document.getElementsByClassName('delete');
// for (let item of deleteRow) {
//   item.addEventListener("click", function(event) {
//     deleteTask(event.target.dataset.id);
//   })
// }
// }

// function deleteTask(item) {
// tableStorage.splice(item, 1);
// showTable(tableStorage);
// }

// function editButton() {
// let editBtn = document.getElementsByClassName("edit");
// for (let item of editBtn) {
//   item.addEventListener("click", function(event) {
//     let parentEle = event.target.closest('.taskWrap');
//     let 
//   });
// }
