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

  resultList = [] 

  processingArray.forEach((num) => {
    if ((num).match('1')){
      resultList.push('Beep!');
    } else if ((num).match('2')){
      resultList.push('Boop');
    } else if ((num).match('3')){
      resultList.push('Wont you be my neighbor?'); 
    } else {
      resultList.push(num);
    }
  });
  
  console.log(resultList)

}; 


//User Logic 
window.addEventListener("load", function(){
  event.preventDefault();

  const form  = document.getElementById("translationForm"); 
  form.addEventListener("submit",generateRobogerLanguage);

});