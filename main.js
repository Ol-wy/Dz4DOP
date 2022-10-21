let inp1 = document.querySelector('.input1');
let inp2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let values;

function change() {
    values = inp1.value
    inp1.value = inp2.value
    inp2.value = values
}
    
btn.addEventListener('click', () => {
    change()
})  
        


    