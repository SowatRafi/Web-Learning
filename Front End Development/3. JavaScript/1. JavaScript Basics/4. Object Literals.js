"use strict";
var sounds = {
    // alam: function(times) {
    //     console.log(Array(times+1).join("Beep "));
    // }, 
    alam(times) {
        console.log("Beep ".repeat(times + 1));
    },
    rigntone: function(times) {
        console.log(Array(times+1).join("YO Yo "));
    }
};

console.log(sounds.alam(3));
console.log(sounds.rigntone(3));