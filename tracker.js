let btn = document.getElementById('btn_count');
let cnt = document.getElementById('val_count');


btn.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

console.log(btn);