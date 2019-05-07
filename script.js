let input = document.getElementById('element');

function buttonClicked() {
    setTimeout(() => {
        buttonTouched();
    }, 10);
}

function buttonTouched() {
    input.focus();
}

function button2Clicked() {
    input.focus();
}

// function action() {
//     console.log('clicked');
//     input.style.display = 'block';
//     input.focus();
// }

// button.addEventListener('click', e => {
//     e.stopPropagation();
// });

// button.addEventListener('click', e => {
//     input.style.display = 'block';
//     setTimeout(() => {
//         input.focus();
//     }, 2000);
// })
