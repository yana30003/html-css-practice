let numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''];
numberList = numberList.sort(() => Math.random() - 0.5);

let wrapEle = document.querySelector('.gameWrap');

for(let number of numberList){
	let newEle = document.createElement('div');
  newEle.innerHTML = number
  wrapEle.append(newEle);
}


let childEles = wrapEle.querySelectorAll('div');
let winCount = 0;

for(let child of childEles){
//   child.addEventListener('click', (event) => {
//   	let clickedEle = event.target;
    
//   	let activeEle = wrapEle.querySelector('.active');
//     if(activeEle){
//     	activeEle.classList.remove('active')
//     }	
    
//     console.log('activeEle', activeEle, 'clickedEle', clickedEle)
    
//     if(activeEle && clickedEle.innerHTML === ''){
//       clickedEle.innerHTML = activeEle.innerHTML
//       activeEle.innerHTML = '';
//     }
    
//   	event.target.classList.add('active');
//   	//console.log('event', event)
    
//     if (checkWin()){
//         winCount++
//         //console.log(`you won ${winCount} times`)
//         alert(winCount)
//     }
//   })
}



function checkWin () {
	let childs = wrapEle.querySelectorAll('div');
  let result = '';
  for(let childEl of childs){
  	result += childEl.innerHTML;
  }
	if(result === '123456789101112131415'){
  	alert('You Win')
  }
  return false
}
//childEles.addEventListener('click', () => {
	
//})
