function appendToDisplay(value) {
    // let display;
    // if (clearDisplay.value === "" && ['+','-','*','/'].includes(value)) {
    //     display.value=" error: invalid" ;
        
    //     return ;
        
    // }
    document.getElementById("display").value += value;
}// display of result and to input click number 

function clearDisplay() { // to clear element  
    document.getElementById("display").value = ""; // setts display value to empty string 
}
function calculateResult() {

    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}