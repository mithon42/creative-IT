const userInput = document.getElementById('userInput');
const display = document.getElementById('display');
const forLoopBtn = document.getElementById('forLoopBtn');
const whileLoopBtn = document.getElementById('whileLoopBtn');


// using for loops
forLoopBtn.addEventListener('click', function(){
   if (userInput.value != '') {
      for (let i = 1; i <= 10; i++) {
         display.innerHTML += `${userInput.value} X ${i} = ${userInput.value * i} <br/>` 
      }
   }else{
      alert('Please enter your number')
   };
   userInput.value = ''
});


// using while loops
whileLoopBtn.addEventListener('click', function(){
   if (userInput.value != '') {
      let i = 1;
      while (i <= 10) {
         display.innerHTML += `${userInput.value} X ${i} = ${userInput.value * i} <br/>`
         i++
      }
   }else{
      alert('Please enter your number')
   };
   userInput.value = ''
});