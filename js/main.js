const inputs = document.querySelectorAll('.input');

console.log(inputs);

function focusFuncion(){
    let padre = this.parentNode.parentNode;
    padre.classList.add('focus');
}

function blurFuncion(){
    let padre = this.parentNode.parentNode;
    if(this.value == ''){
        padre.classList.remove('focus');
    }
}


inputs.forEach(input => {
    input.addEventListener('focus', focusFuncion);
    input.addEventListener('blur', blurFuncion);
});


