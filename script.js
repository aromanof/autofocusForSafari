let button = document.getElementById('button');
let input = document.getElementById('element');

function radioClicked() {
    console.log('clicked');
    input.focus();
}

function buttonClicked() {
    setTimeout(() => {
        input.focus();
    }, 10);
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