let btn = document.getElementById('display');

function appendToDisplay(input) {
    btn.value += input; 
}

function deleteDisplay(input) {
    btn.value = btn.value.slice(0, -1);
}

function resetDisplay() {
    btn.value = "";
}

function calculate() {
    try{
        btn.value = eval(btn.value);
    }
    catch(error) {
        btn.value = 'Error';
    }
    
}