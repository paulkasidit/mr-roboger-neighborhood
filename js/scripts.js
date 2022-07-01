function generateRobogerLanguage(num){ 
  event.preventDefault();

  const userInput = parseInt(document.getElementById("userInput").value);

  console.log(userInput)
} 

window.addEventListener("load", function(){
  event.preventDefault();

  const form  = document.getElementById("translationForm"); 
  form.addEventListener("submit",generateRobogerLanguage);
});