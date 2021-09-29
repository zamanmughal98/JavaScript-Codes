let arr = [];
var array_len = Number(prompt("How many values you want to enter in Array ??", "5"));
for (i = 0; i < array_len; i++) {
    arr.push(Number(prompt("Enter a value please !")));
}
console.log("Printing Whole Array " + arr);
function detectDuplicate1(array1) {
    for (var i = 0; i < array1.length - 1; i++) {
        for (var j = i + 1; j < array1.length; j++) {
            if (array1[i] === array1[j]) {
                console.log("Duplicate value (function# 1)==> " + array1[i]);
            }
        }
    }
}
function isIncludes(array1, num) {
    for (var i = 0; i < array1.length; i++) {
        if (num === array1[i]) {
            return true;
        }
    }
    return false;
}
function detectDuplicate2(array1) {
    checkArray = [];
    dupArray = [];
    for (var i = 0; i < array1.length; i++) {
        if (!isIncludes(checkArray, array1[i])) {
            checkArray.push(Number(array1[i]));
        }
        else if (!isIncludes(dupArray, array1[i])) {
            dupArray.push(Number(array1[i]));
        }
    }
    checkArray.length = 0;        //delecting the array from memory
    return dupArray;
}
detectDuplicate1(arr); //Function Calling and passing the array as argument;
console.log("Duplicate Values (Function# 2)==> " + detectDuplicate2(arr)); //Function Calling and passing the array as argument
