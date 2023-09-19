let number = 22;

const result = () => {
   if(number >= 80){
      console.log(number + ' = ' + 'A+');
   }else if(number >= 70){
      console.log(number + ' = ' + 'A');
   }else if(number >= 60){
      console.log(number + ' = ' + 'A-');
   }else if(number >= 50){
      console.log(number + ' = ' + 'B');
   }else if(number >= 40){
      console.log(number + ' = ' + 'C');
   }else if(number >= 33){
      console.log(number + ' = ' + 'D');
   }else{
      console.log(number + ' = ' + 'F');
   }
}
result();