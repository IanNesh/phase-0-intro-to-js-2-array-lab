// Write your solution here!
const cats = ["Milo" , "Otis" , "Garfield"];
function destructivelyAppendCat(){
 cats.push("Ralph")
}
destructivelyAppendCat();
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
destructivelyPrependCat()
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
destructivelyRemoveFirstCat()
function appendCat(){
    let newArray = [...cats, "Broom"]
    return newArray
}
function prependCat(){
    let newArray = ["Arnold", ...cats]
    return newArray
}
function removeLastCat(){
    let newArray = cats.slice(0,-1)
    return newArray
}
function removeFirstCat(){
    let newArray = cats.slice(1)
    return newArray
}