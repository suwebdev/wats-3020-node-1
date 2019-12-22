# Tutorials for WATS 3020 Node 1

## 1-experiments  
Add code to work on the TODO's in 1-experiments/index.js  
1. Use the `typeof` operator to display what JavaScript sees as the types of constant value provide
  ```JavaScript
  typeof <value to test>
  ```
2. Translate text to code to add strings and numbers to see how string concatenation using the `+` operator is affected by order
  ```JavaScript
  //use the + sign with different type values
  ```
3. Log the values of strings comparing stand alone operator with assignment operator ( `+` vs `+=`).  Notice that `+=` changes the value of the left hand operand.
  ```JavaScript
  //console.log the values of expressions and results
  ```
4. Add ternary functions using the constant value to see how JavaScript creates "truthy" and "falsy" values out of strings and other types.  This can be useful in creating logical expressions.  Ternary functions will look something like this:
  ```JavaScript
  console.log("string is  ", STRING_VALUE ? true : false );
  ```  

## 2-odd-even
This is a very basic program that checks to see if the user provided an integer and, if so, determine whether the integer is even or odd. In order to complete the program, you should replace each TODO in the file `2-odd-even/index.js`.
1. TODO use the if statement to check input using isNaN and NOT Number.isInteger
  ```JavaScript
  if (isNaN(input) || !Number.isInteger(input))
  ```
2. TODO use console.log to provide a usage statement when user forgets to enter a number
  ```JavaScript
  console.log("usage: node 1-odd-even/index.js <integer>");
  ```
3. TODO use the if statement to test if integer is divisible by 2
  ```JavaScript
  if (input % 2 === 0)
  ```
4. TODO use console.log with a template literal to report that the number is even
  ```JavaScript
  console.log(`${input} is even`);
  ```
5. TODO use console.log with a template literal to report that the number is odd
  ```JavaScript
  console.log(`${input} is odd`);
  ```

## 3-string-contains-hello 
This is a very basic program that checks to see if the user provided a string and, if so, whether or not the string contains the substring 'hello.' In order to complete the program, you should replace each TODO in the file `3-string-contains-hello/index.js`.
1. TODO use console.log to add a usage statement and let the user know that if a string contains a space it must be quoted
  ```JavaScript
  console.log("usage: node 2-string-contains-hello/index.js <string>");
  console.log("if string contains a space, put it in quotes");
  ```
2. TODO write a logical expression to test if the input contains a "hello"
  ```JavaScript
  if (input.indexOf("hello") > -1)
  ```
3. TODO use console.log and a template literal at what position the hello was found
  ```JavaScript
  console.log(`input contains hello at location ${input.indexOf("hello")}`);
  ```
4. TODO use console.log to indicate that the hello was not found
  ```JavaScript
  console.log(`input does not contain the string "hello"`);
  ```

## 4-hours-to-minutes
This is a very basic program that checks to see if the user provided an integer and, if so, converts the number (in minutes) to hours and minutes. In order to complete the program, you should replace each TODO in the file `4-hours-to-minutes/index.js`.
1. TODO check input using isNaN and NOT Number.isInteger 
  ```JavaScript
  if ( isNaN(input) || !Number.isInteger(input))
  ```
2. TODO use console.log to provide a usage statement when user forgets to enter a number
  ```JavaScript
  console.log("usage: node 4-hours-to-minutes/index.js <integer>");
  ```
3. TODO: create a variable named hours and calculate the whole number of hours using the / operator and .toFixed
  ```JavaScript
  let hours = (input/60).toFixed(0);
  ```
4. TODO: create a variable named minutes and calculate the number of minutes using the % (modulo) operator
  ```JavaScript
  let minutes = input % 60;
  ```
5. TODO: create a variable named hrs and use a ternary expression to determine whether there are singular or plural hours
  ```JavaScript
  let hrs = hours > 1 ? "hours" : "hour";
  ```
6. TODO: create a variable named mins and use a ternary expression to determine whether there are singular ot plural minutes
  ```JavaScript
  let mins = minutes > 1 ? "minutes" : "minute";
  ```

## 5-mini-app  
Write an app that meets requirements:
* uses if/else
* uses at least one operator +, -, *, /, %
* reads an arg from the command line and provides usage if not present or wrong type

Suggestions:
* convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00
* convert Fahrenheit to Celsius C = (F - 32) *  5/9
* convert pennies to dollars, for example 136 pennies is $1.36