function average (ar) {
    
    var sum = 0;
    var av = 0;
    
    for (var i = 0; i <= ar.length-1; i++) {
        sum = sum + ar[i];
        
    }
    //console.log(ar.length);
    av = sum / ar.length;
    
    console.log(Math.round(av));
    return Math.round(av);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);