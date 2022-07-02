//Business Logic

function createUserInputArray(num) {  //this callback function takes in the user's input and outputs an array from 0 to the user's number 
  
  let userInputArray = []; 

  for(let i = 0; i <= num; i++){
    userInputArray.push(i); 
  };
  
  return userInputArray; 
} 

function generateRobogerLanguage(e){ 

  e.preventDefault(); 

  const userInput = parseInt(document.getElementById("userInput").value);
  let processingArray = createUserInputArray(userInput).map(String); //user array is converted into an array of strings for processing 

  console.log(processingArray); 

  resultArray = [] //push the results from the processingArray into a resultsList, to be converted into a string later

  processingArray.forEach((num) => {
    if ((num).match('1')){
      resultArray.push("Beep!");
    } else if ((num).match('2')){
      resultArray.push("Boop");
    } else if ((num).match('3')){
      resultArray.push("Won\'t you be my neighbor?"); 
    } else {
      resultArray.push(num);
    }
  });

  let result =  resultArray.toString().replaceAll(',', ' ');   
  document.getElementById("result").innerText = result; 


  console.log(result);
  console.log(typeof(result));
  //resultsArea = document.getElementById("results-area"); 
  //resultsArea.removeAttribute("style");
  return result
}; 


//User Logic 
window.addEventListener("load", function(){
  event.preventDefault();

  //let resultsArea  = document.getElementById("results-area"); 
  //resultsArea.style.display = "none";

  const form  = document.getElementById("translationForm"); 
  form.addEventListener("submit",generateRobogerLanguage);

});