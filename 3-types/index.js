const STRING_VALUE = "test_string"
const EMPTY_STRING_VALUE = ""
const INT_VALUE = 100
const INT_ZERO = 0
const FLOAT_VALUE = 100.00
const BOOL_TRUE = true
const BOOL_FALSE = false
const UNDEFINED = undefined
const NULL = null
const NAN = NaN

console.log("---- Use typeof operator ----")
// TODO write typof statements for all constants values following 
// the final comma in the log statement
console.log("STRING_VALUE ",STRING_VALUE, "->",)
console.log("EMPTY_TRING_VALUE ",EMPTY_STRING_VALUE, "->",)
console.log("INT_VALUE ",INT_VALUE, "->",)
console.log("INT_VALUE ",INT_ZERO, "->",)
console.log("INT_VALUE ",FLOAT_VALUE, "->",)
console.log("INT_VALUE ",BOOL_TRUE, "->",)
console.log("INT_VALUE ",UNDEFINED, "->",)
console.log("INT_VALUE ",NULL, "->",)
console.log("INT_VALUE ",NAN, "->",)


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
// log add string to float with 2 decimal places
console.log("string + float with 2 decimal places ",)
// log add string to true
console.log("string + true ", )
// log add string to false
console.log("string + false ", )
// log add string to undefined
console.log("string + undefined ", )
// log add string to null
console.log("string + null ", )

console.log("---- String concatenation ----")
let s1 = STRING_VALUE
let s2 = STRING_VALUE
let s3 = s1 + s2
s1 += s2
//TODO log s1 = value of s1, s2 = value of s2, s3 = value of s3 using template literal
console.log()

// test truthy/falsy using == for string, empty string, null and undefined
// use ternary operator to determine if the value would be treated as true or false

//TODO add the ternary operation to see how JS converts non boolean types into truthy/falsy
console.log("---- Test truthy/falsy using ternary operator ----")
console.log("string -> ", )
console.log("int ->", )
console.log("empty string -> ", )
console.log("undefined ->", )
console.log("null ->", )
console.log("0 -> ", )
console.log("NaN ->  ", )




process.exit()