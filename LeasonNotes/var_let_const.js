//testin difference between var and let

console.log(age);// since the variable was not decleard in the first place but it shows undefined instead. this happens because all variable extracted first and given scope before the proram runs
//This concepts is called variable hoisting.
//hence it does not know the value of the variable but it still knows it exists, resulting with undefined output.

var age = 25; //

//for example

function sayAge(){
    var age1 = 1;
    let age2 = 2;
    const age3 = 3;
}

//all there will give error
 
// vars are function scoped
//let and const are block scoped and do not have var hoisting

if(1>2){
    var age1 = 1;
    let age2 = 2;
    const age3 = 3;
}

// here age1 will not show error while the rest two will show eeror since let and const are not bounded by scope!

//rediclaration
var x=0;
var y=0;
//allowed not possible for const and let!