const STRING_VALUE = "test_string"
const EMPTY_STRING_VALUE = ""
const INT_VALUE = 100
const INT_ZERO = 0
const FLOAT_VALUE = 100.01
const BOOL_TRUE = true
const BOOL_FALSE = false
const UNDEFINED = undefined
const NULL = null
const NAN = NaN

console.log("---- Use typeof operator ----")
// TODO write typeof statements for all constants values following 
// the final comma in the log statement
console.log("STRING_VALUE",STRING_VALUE, "is of type",)
console.log("EMPTY_STRING_VALUE",EMPTY_STRING_VALUE, "is of type",)
console.log("INT_VALUE",INT_VALUE, "is of type",)
console.log("INT_ZERO",INT_ZERO, "is of type",)
console.log("FLOAT_VALUE",FLOAT_VALUE, "is of type",)
console.log("BOOL_TRUE",BOOL_TRUE, "is of type",)
console.log("BOOL_TRUE",BOOL_FALSE, "is of type",)
console.log("UNDEFINED",UNDEFINED, "is of type",)
console.log("NULL",NULL, "is of type",)
console.log("NAN",NAN, "is of type",)


console.log("---- Test add operator with strings ----")
//TODO implement the addition of types according the quoted portion of the log statement
// log string + string
console.log ("string + string ",)
// log add string to int
console.log("string + int ",)
// log int + string
console.log("int + string ", )
// log int + int + string
console.log("int + int + string ", )
// log add string to float
console.log("string + float ",)
// log add string to true
console.log("string + true ", )
// log add string to false
console.log("string + false ", )
// log add string to undefined
console.log("string + undefined ", )
// log add string to null
console.log("string + null ", )

console.log("---- assignment operator ----")
let s1 = STRING_VALUE
let s2 = STRING_VALUE
let s3 = s1 + s2
s1 += s2
//TODO console.log the values of s1, s2, s3 after each statement
console.log()

// test truthy/falsy using == for string, empty string, null and undefined
// use ternary operator to determine if the value would be treated as true or false

//TODO add the ternary operation to see how JS converts non boolean types into truthy/falsy
console.log("---- Test truthy/falsy using ternary operator ----")
console.log("string is  ", )
console.log("int is ", )
console.log("empty string is  ", )
console.log("undefined is ", )
console.log("null is ", )
console.log("0 is  ", )
console.log("NaN is   ", )

process.exit()