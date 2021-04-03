**JavaScript rules**

* Always place your JavaScript at the footer of the web page. Because JavaScript load in the browser first.

* People might use `type="text/javascript"` in their code. However, we don't need it now a days. Browsers are very clever now. By default _HTML5_ can do it by itself.

**Variable Types**
1. Integer
2. Floating Point
3. String
4. Boolean
5. Array
6. Date
7. Object

* `"use strict";` for Strictly checking the script.
* `==` for normally checking & `===` for strictly checking the variable.

**Functions**
_Function Mismatch_

`function myFunction(x, y, z) {`
`   // do something;`
`}`

`myFunction(25, 26);`
`// z is undefined...`

`function myFunction (x, y, z) {`
`   // do something;`

`myFunction(25, 26, 27, 28);`
`//28 is ignored...`

**Arrays**

* Hold multiple values
* 0 based index

`var someData = ["One", 2, 'C']`

**Array Methods**
* `somedata.reverse();` `.join();` `.sort()`

**Object Literals**

_Example of a Object Literal_

`alam(times) {`

`        console.log("Beep ".repeat(times + 1));`

`    },`

`    rigntone: function(times) {`

`        console.log(Array(times+1).join("YO Yo "));`

`    }`

`}`

**Arrow Functions**

_Arrow Fucntions example_
`var developersList = (developers) => console.log(developers);`

`New3 = developersList.developers = "Rafid";`

**Destructure**

_Destructure example_

`var vacation = {`

`    destination: "Chittagong",`

`    travelers: 2,`

`    activity: "biking",`

`    cost: 14000`

`};`


`function vacationSummer ( {destination, activity} ){`

`    return "Let's go to " + destination + " for " + activity + ".";`

`}`

`console.log(vacationSummer(vacation));`

**Generators**

`function* eachItem(arr) {`
`    for (var i = 0 ; i < arr.length ; i++ ) {`
`        yield arr[i];`
`    }`
`}`

`var myNumbers = eachItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);`

`var myNum = setInterval(function(){`
`    var myNumber = myNumbers.next();`
`    if (myNumber.done) {`
`        clearInterval(myNum);`
`        console.log("These are my numbers.");`
`    } else {`
`        console.log(myNumber.value);`
`    }`
`}, 500);`

