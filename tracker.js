let total = document.getElementById('val_total');

let btn1 = document.getElementById('btn_add1');
let btn5 = document.getElementById('btn_add5');


btn1.addEventListener('click', () => {

    total.innerText = parseInt(total.innerText) + 1;

});


btn5.addEventListener('click', () => {

    total.innerText = parseInt(total.innerText) + 5;

});