function isBigger(greater, less){
    return greater > less
}

function isSmaller(less, greater){
    return isBigger(greater, less);
}
// isSmaller(5, -1);
console.log(isSmaller(5, -1)); //=> false