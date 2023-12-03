const { status } = require("express/lib/response");

const mass = prompt("enter you mass");
const height = prompt("enter your height");
const bmi = mass/(height*height);

function status(value){
    if (value<20||value>25){
        return "unhealthy";
    }

    else {
        return "healthy";
    }
}

console.log(bmi+" which is "+status(bmi));
