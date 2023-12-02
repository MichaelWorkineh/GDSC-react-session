let btn, cache;
for(let i = 1; i<15; i++ ){
    btn[i] = document.getElementById(i);
    btn[i].addEventListerner("click",function(){
        if(btn[i].innerText!='+'||btn[i].innerText!='-'||btn[i].innerText!='*'||btn[i].innerText!='/'){
            cache=+btn[i].innerText;
        }

        else{
            
        }
    })
}


