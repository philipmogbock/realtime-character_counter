// create your variables and set initial values
let text_count=0;
let text_left=50;

// store elements in variables
const text_countEl = document.getElementsByClassName("character-total") [0];
const text_leftEl= document.getElementsByClassName("character-remaining") [0];
const input= document.getElementsByClassName("text") [0];

// show default values on page
text_countEl.innerText = `${text_count}`;
text_leftEl.innerText = `${text_left}`;

// event listener for typing
input.addEventListener("keyup", event=>{
    
    //update the counts after every key typed
    updateCounter();

})

// function to get length of text and increment counters
function updateCounter(){
    // get lenght of chararcter in text box and update the value on the page
    text_countEl.innerText =input.value.length;
    //subtract length of characters entered from max allowed
    text_leftEl.innerText=text_left-text_countEl.innerText;
}

