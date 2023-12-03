let btn =new Array(), cache = new Array(), index1 = 0,index2 = 0, opeartor = new Array();
const display = document.getElementById('display');
function storeNum (value, index){
    cache[index] = value;
    console.log(cache[index]);
}
function storeSign(operator, index){
    operator[index] = operator;
}
for(let i = 1; i<15; i++ ){
    let ID = i.toString();
    btn[i] = document.getElementById(ID);
    btn[i].addEventListener('click',function(){
        console.log(ID);
        if(i<11){
            display.innerText = display.innerText+ID;
            storeNum(i,index1);
            index1++;
        }
        else if(i>10 && i<14){
            index1--;
            storeNum(parseInt(display.innerText),index1);
            index1++;
            storeSign(i,index2);
            index2++;
            display.innerText = 0;
        }
        else if(i === 14){
            index1--;
            storeNum(parseInt(display.innerText),index1);
            index1++;
            if(opeartor.length===0){
                index1--;
               display.innerText=cache[index1];
            }
            else{
                index2--;
                if(operator[index2]===11){
                    
                }
            }
        }
    });
}


