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
console.log("STRING_VALUE", STRING_VALUE, "is of type ", typeof STRING_VALUE)
console.log("EMPTY_STRING_VALUE", EMPTY_STRING_VALUE, "is of type ", typeof EMPTY_STRING_VALUE)
console.log("INT_VALUE", INT_VALUE, "is of type ", typeof INT_VALUE)
console.log("INT_ZERO", INT_ZERO, "is of type ", typeof INT_ZERO)
console.log("FLOAT_VALUE", FLOAT_VALUE, "is of type ", typeof FLOAT_VALUE)
console.log("BOOL_TRUE", BOOL_TRUE, "is of type ", typeof BOOL_TRUE)
console.log("BOOL_TRUE", BOOL_FALSE, "is of type ", typeof BOOL_FALSE)
console.log("UNDEFINED", UNDEFINED, "is of type ", typeof UNDEFINED)
console.log("NULL", NULL, "is of type ", typeof NULL)
console.log("NAN", NAN, "is of type ", typeof NAN)


console.log("---- Test add operator with strings ----")
//TODO implement the addition of types according the quoted portion of the log statement
// log string + string
console.log("string + string ", STRING_VALUE + STRING_VALUE)
// log add string to int
console.log("string + int ", STRING_VALUE + INT_VALUE)
// log int + string
console.log("int + string ", INT_VALUE + STRING_VALUE)
// log int + int + string
console.log("int + int + string ", INT_VALUE + INT_VALUE + STRING_VALUE)
// log add string to float
console.log("string + float ", STRING_VALUE + FLOAT_VALUE)
// log add string to float with 2 decimal places
console.log("string + float with 2 decimal places ", STRING_VALUE + FLOAT_VALUE.toFixed(2))
// log add string to true
console.log("string + true ", STRING_VALUE + BOOL_TRUE)
// log add string to false
console.log("string + false ", STRING_VALUE + BOOL_FALSE)
// log add string to undefined
console.log("string + undefined ", STRING_VALUE + UNDEFINED)
// log add string to null
console.log("string + null ", STRING_VALUE + NULL)

console.log("---- String concatenation ----")
let s1 = STRING_VALUE
console.log(`"s1" ${s1}`)
let s2 = STRING_VALUE
console.log(`"s2" ${s2}`)
let s3 = s1 + s2
console.log(`"s1" ${s1} "s2" ${s2} "s3" ${s3}`)
s1 += s2
console.log(`"s1" ${s1} "s2" ${s2}`)

// test truthy/falsy using == for string, empty string, null and undefined
// use ternary operator to determine if the value would be treated as true or false

//TODO add the ternary operation to see how JS converts non boolean types into truthy/falsy
console.log("---- Test truthy/falsy using ternary operator ----")
console.log("string is  ", STRING_VALUE ? true : false)
console.log("int is ",  INT_VALUE ? true : false)
console.log("empty string is  ", EMPTY_STRING_VALUE ? true : false)
console.log("undefined is ", UNDEFINED ? true : false )
console.log("null is ", NULL ? true : false ) 
console.log("0 is  ", INT_ZERO ? true: false)
console.log("NaN is   ", NAN ? true: false )




process.exit()