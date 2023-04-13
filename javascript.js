setInterval(setDate,1000);

const secHand = document.querySelector('.h1');
const minsHand = document.querySelector('.h2');
const hoursHand = document.querySelector('.h3');
const hands = document.querySelector('.hand');



function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDeg = ((seconds / 60) * 360 + 90);
    
    if (secondsDeg > 438 || secondsDeg < 96) {hands.style.setProperty('transition', 'null')} else {hands.style.setProperty('transition', '')}

    const mins = date.getMinutes();
    const minsDeg = ((mins / 60) * 360 + 90);

    const hours = date.getHours();
    const hoursDeg = ((hours / 12) * 360 + 90);


    secHand.style.setProperty('rotate', secondsDeg + 'deg');
    minsHand.style.setProperty('rotate', minsDeg + 'deg');
    hoursHand.style.setProperty('rotate', hoursDeg + 'deg');

}

