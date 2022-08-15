



const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){  
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCat = [...cats, "Broom"];
    return newCat
}

function prependCat(name){
    const new_Cat = ["Arnold", ...cats];
    return new_Cat;
}

function removeLastCat(){
    const copy = cats.slice(0,cats.length-1);
    return copy
}

function removeFirstCat(){
    const caats = cats.slice(1)
    return caats
}





























































/*var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(tom) {
    cats.push(tom);
    return cats;
}

function destructivelyPrependCat(tom){
    cats.unshift(tom);
    return cats;
}
 
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
 
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
 
function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
}
 
function prependCat(name){
    var name_2=[name, ...cats];
    return name_2
}
 
function removeLastCat(){
    var caats= cats.slice(0,cats.length-1);
    return caats;
}
 
function removeFirstCat(){
    var catts= cats.slice(1)
    return catts
}*/