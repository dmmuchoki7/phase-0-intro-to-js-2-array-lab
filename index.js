// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

//push
function destructivelyAppendCat(){
    cats.push("Ralph");
}

//
function destructivelyPrependCat(){
    cats.unshift("Bob");
}

//pop
function destructivelyRemoveLastCat(){
    cats.pop();
}
//remove first cat
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let newArray=[...cats,"Broom"]
    return newArray;
}

//prepend
function prependCat(){
    let newArray=["Arnold",...cats]
    return newArray;
}

//remove last cat
function removeLastCat(){
    let newArr= cats.slice(0,-1);
    return newArr;
}

//remove first cat
function removeFirstCat(){
    let newArr= cats.slice(1);
    return newArr;
}