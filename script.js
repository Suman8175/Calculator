document.addEventListener("DOMContentLoaded", function() {
    let str='';  
let button=document.querySelectorAll("button");
let inputtag=document.getElementById("inputtext");
Array.from(button).forEach((bu)=>{
    bu.addEventListener("click",(btn)=>{
        
       
        if(bu.innerHTML=='='){
            str= eval(str);
            inputtag.value=str;
            
        }
        else if(bu.innerHTML=='AC'){
            str='';
            inputtag.value='';
        }
        else{
            str+=bu.innerHTML;
            console.log(str);
           inputtag.value=str;
        }
 
    })
})
})