const display=document.getElementById("display");

function appendValue(input){
    display.value+=input;
}

function ClearScreen(){
    display.value="";
}

function findTotal(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Bad Expression, Try Again!";
    }    
}

function BackSpace(){
    display.value=display.value.slice(0,-1);
}