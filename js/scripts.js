//Business Logic

const userInput = parseInt(document.getElementById("userInput").value);

function createUserInputArray(num) { 
  
  let userInputArray = []; 

  for(let i = 0; i <= userInput; i++){
    processingArray.push(i); 
  };
  
  return userInputArray; 
} 

function generateRobogerLanguage(num){ 

  const processingArray = createUserInputArray(userInput).map(Sring); 

  
  
  console.log(processingArray); 

};


//User Logic 
window.addEventListener("load", function(){
  event.preventDefault();

  const form  = document.getElementById("translationForm"); 
  form.addEventListener("submit",generateRobogerLanguage);
});