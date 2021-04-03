// function* movie() {
//     yield "Lights";
//     yield "Camera";
//     yield "Action";
// }

// var action = movie();

// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);

function* eachItem(arr) {
    for (var i = 0 ; i < arr.length ; i++ ) {
        yield arr[i];
    }
}

var myNumbers = eachItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

var myNum = setInterval(function(){
    var myNumber = myNumbers.next();
    if (myNumber.done) {
        clearInterval(myNum);
        console.log("These are my numbers.");
    } else {
        console.log(myNumber.value);
    }
}, 500);