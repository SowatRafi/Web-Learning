function loopFrom (x, y, z) {
    for ( var i = x ; i <= y ; i++ ) {
        if ( i == z ) {
            console.log("17 is missing na?");
            continue;
        }
        console.log( i + " Hello World!");
    }
}