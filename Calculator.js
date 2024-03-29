class Calculator{

  constructor()
  {
	  console.log("Calculator loaded");
  }

  add(num1=0,num2=0){

   if(typeof(num1)!== 'number' ||
   typeof(num2)!== 'number'){
     return 0;
   }
	  return num1 + num2;
  }
  
  divide(num1=0,num2=0){

    let data = num1 / num2;

    if(data==Infinity){

      return "Divide by zero error"
    }else{
      return data;
    }
   
    return num1 / num2; 
   
    
  
  }

}

//required so data is visible externally
module.exports = Calculator;
