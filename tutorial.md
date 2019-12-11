# Tutorial for WATS 3020 Node 1

Fork this repository.  
In order to successfully complete this assignment, you must find and complete the **TODOs** in the code:

**1-experiments**  
Add code to work on the TODO's in 1-experiments/index.js  
  - Use the `typeof` operator to display what JavaScript sees as the types of constant value provide
  ```JavaScript
  typeof <value to test>
  ```
  - Translate text to code to add strings and numbers to see how string concatenation using the `+` operator is affected by order
  ```JavaScript
  //use the + sign with different type values
  ```
  - Log the values of strings comparing stand alone operator with assignment operator ( `+` vs `+=`).  Notice that `+=` changes the value of the left hand operand.
  ```JavaScript
  //console.log the values of expressions and results
  ```
  - Add ternary functions using the constant value to see how JavaScript creates "truthy" and "falsy" values out of strings and other types.  This can be useful in creating logical expressions.  Ternary functions will look something like this :
  ```JavaScript
  <CONSTANT> ? true : false
  ```  

**2-odd-even**
Add code to replace the TODO's in 1-odd-even/index.js  
  - Test that the user entered an integer: `isNan(input)` will test that the input is a number and `Number.isInteger(input)` will test the number is an integer.and that the number is an integer.  Using `||`.  Set up logical expressions and if/else so that you can provide a **usage** statement to tell the user how to run the program using node if a number is not found. Notice we rely on "falsy" in the following test:
  ```JavaScript
    isNaN(input) || !Number.isInteger(input)

    //usage
    console.log("usage: node 1-odd-even/index.js <integer>")
  ```
  - Write a logical expression to test if the input integer is divisible by 2.  You can use the modulo (remainder) operator `%` to create a logical expression.
  ```JavaScript
  input % 2 === 0
  ```
  - Report "odd" if the input is odd and "even" if it is even 
  ```JavaScript
  console.log(`${input} is even`)

  console.log(`${input} is odd`)
  ``` 

**3-string-contains-hello**    
Add code to replace the TODO's in 2-string-contains-hello/index.js  
  - Test that the user entered a string and log a usage statements to let the user know that a string is expected and that a string with spaces needs to be quotes
  ```JavaScript
  console.log("usage: node 2-string-contains-hello/index.js <string>")
  console.log("if string contains a space, put it in quotes")
  ```
  - Write an expression to test if the input string contains hello and find the position in which is being within the input using the `indexOf` method
  ```JavaScript
  input.indexOf("hello") > -1
  ```
  - Log if hello is found and at what position, of it the input string doesn't contain it log that
  ```JavaScript
  `input contains hello at location ${input.indexOf("hello")}`

  `input does not contain the string "hello"`  
  ```


**4-hours-to-minutes**  
Add code to replace TODO's in 4-hours-to-minutes/index.js
  - Check input using isNaN and Number.isInteger to ensure user enter a number
  ```JavaScript
   isNaN(input) || !Number.isInteger(input)
  ```
  - Provide a usage statement in case user didn't enter a number
  ```JavaScript
   console.log("usage: node 4-hours-to-minutes/index.js <integer>")
  ``` 
  - Calculate number of hours using division and .toFixed to round to 0 decimals
  ```JavaScript
    let hours = (input/60).toFixed(0)
  ```
  - Calculate number of minutes remaining using modulo (remainder)
  ```JavaScript
    let minutes = input % 60
  ```
  - Use ternary operator to determine singular or plural hours
  ```JavaScript
    let hrs = hours > 1 ? "hours" : "hour"
  ```
  - Use a ternary to determine singular or plural minutes
  ```JavaScript
    let mins = minutes > 1 ? "minutes" : "minute"
  ```
  **5-mini-app**  
Write an app that meets requirements:
 - uses if/else
 - uses at least one operator +, -, *, /, %
 - reads an arg from the command line and provides usage if not present or wrong type
 - suggestions:
    - convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00
    - convert Fahrenheit to Celsius C = (F - 32) *  5/9
    - convert pennies to dollars, for example 136 pennies is $1.36

**be sure to test all your apps**
## Turn in assignment
Push your code to the forked repository in your account.  

Turn in 1 URL on Canvas which should be of the format: https://github.com/{account name}/{repo name}