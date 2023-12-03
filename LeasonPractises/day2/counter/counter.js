const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reset = document.getElementById("rest");
const display = document.getElementById("clock");

let value = 0;

btn1.addEventListener("click", function(){
   // alert(value+' will be increased!');
    value++;
    console.log(value);
    display.innerText = value;
    
})

btn2.addEventListener("click", function(){
   // alert(value+' will be decreased!');
    value--;
    console.log(value);
    display.innerText = value;
})

reset.addEventListener("click",function(){
    alert('The counted value will be reset!');
    value = 0;
    display.innerText = value;
})

