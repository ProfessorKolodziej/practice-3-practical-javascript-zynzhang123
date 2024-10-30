// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log('Hello!');

const lala = 'Nancy';
console.log(lala);
console.log(typeof lala);

const b = 4 < 3;
console.log(b);

let age = 20;
age += 1;
console.log(age);

//Practice for JS: show and hide the paragraph

//find the element to hide
const toggledp = document.querySelector('.show');
console.log(toggledp);

//write a function to show/hide the paragraph
function toggledpf() {
    toggledp.classList.toggle('show');
    toggledp.classList.toggle('hide');
    console.log("Working!");
    console.log(toggledp);
}



//find the button and make action
const button = document.querySelector('#toggle-control');
console.log(button);
button.addEventListener('click', toggledpf);