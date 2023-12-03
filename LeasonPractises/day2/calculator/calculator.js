let btn =new Array(), cache, opeartor , value1 = 0;
const clearBtn = document.getElementById('clear');
const display = document.getElementById('display');
function storeNum (value){
    cache = value;
    console.log(cache);
}
function storeSign(operater){
    opeartor = operater;
}
for(let i = 0; i<15; i++ ){
    let ID = i.toString();
    btn[i] = document.getElementById(ID);
    btn[i].addEventListener('click',function(){
        console.log(ID);
        if(i<10){
            display.innerText = display.innerText+ID;
            storeNum(i);
        }
        else if(i>9 && i<14){
            storeNum(parseInt(display.innerText));
            storeSign(i);
            value1 = cache;
            display.innerText = 0;
        }
        else if(i === 14){
            storeNum(parseInt(display.innerText));
            if(opeartor === 0){
               display.innerText=cache;
            }
            else{
                if(opeartor === 10){
                    console.log(cache);
                    display.innerText = cache + value1;
                }

                else if(opeartor === 11){
                    console.log(cache);
                    display.innerText = value1 / cache;
                }
                else if(opeartor === 12){
                    console.log(cache);
                    display.innerText = value1 - cache;
                }
                else if(opeartor === 13){
                    console.log(cache);
                    display.innerText = value1 * cache;
                }
                alert("press clear to start a new calculations");
            }
        }
    });
    clearBtn.addEventListener('click',function(){
        display.innerText=0;
        value1 = 0;
        cache = 0;
        operater = 0
    });
}


