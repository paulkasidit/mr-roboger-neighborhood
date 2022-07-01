Describe: generateRobogerLanguage() 

integer > array > string 

test: function should take in an integer and return a string.  
code: const userInput = 123 
Expect: generateRobogerLanguage(userInput) = "123"  

test: function should output an array from 0 to userInput's number. 
code const userInput = 10  
Expect: generateRobogerLanguage(userInput) = [0,1,2,3,4,5,6,7,8,9,10]  

test: function should replace any number in array that contains 1 with string "Beep!" 
code const userInput = 10  
Expect: generateRobogerLanguage(userInput) = [0,"Beep",2,3,4,5,6,7,8,9,"Beep"]   

test: function should replace any number in array that contains 2 with string "Boop!" 
code const userInput = 10  
Expect: generateRobogerLanguage(userInput) = [0,"Beep","Boop!",3,4,5,6,7,8,9,"Beep"]     

test: function should replace any number in array that contains 3 with string "Won't you be my neighbor?" 
code const userInput = 10  
Expect: generateRobogerLanguage(userInput) = [0,"Beep","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep"]    

test: function should output final result into a string seperated by a space 
code const userInput = 10  
Expect: generateRobogerLanguage(userInput) = "0 Beep Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep"    
