
//Business Logic
  //function to create an array from user input  
  //callback function to take in the user's input and outputs an array from 0 to the user's number 
function createUserInputArray(num) {  
  
    let userInputArray = []; 
      for(let i = 0; i <= num; i++){
        userInputArray.push(i); 
      };
    return userInputArray; 
  
} 

function generateRobogerLanguage(arr) { 

  resultArray = [] //push the results from the processingArray into a resultsList, to be converted into a string later

<<<<<<< HEAD

  arr.forEach((num) => {
=======
  processingArray.forEach((num) => {
>>>>>>> main
    if ((num).match('3')){ //using array matching expressions to find strings containing each number, this method does not work properly with an array of numbers
      resultArray.push("Won\'t you be my neighbor?"); //strings that meet this condition are pushed to the result array 
    } else if ((num).match('2')){
      resultArray.push("Boop!");
    } else if ((num).match('1')){
      resultArray.push('Beep!'); 
    } else {
      resultArray.push(num); //strings that meet no conditions are left as is and pushed to the result array
    }
  });

  return resultArray;
}

//User Logic 
  //function to output results to DOM
function outputResult(e){ 

  let userInput = parseInt(document.getElementById("userInput").value);
  let processingArray = createUserInputArray(userInput).map(String); 

  e.preventDefault(); 

  const result =  generateRobogerLanguage(processingArray).toString().replaceAll(',', ' '); //convert array to string, each seperated by a space   
      //hiding and then unhiding result

  document.getElementById("result").innerText = result; 
  let resultsArea = document.getElementById("results-area"); 
  resultsArea.removeAttribute("style");

  return result; //the final result is returned
}

window.addEventListener("load", function(){
  
  event.preventDefault();
  
  let resultsArea  = document.getElementById("results-area"); 
  resultsArea.style.display = "none";

  const form  = document.getElementById("translationForm"); 
  form.addEventListener("submit",outputResult);

});