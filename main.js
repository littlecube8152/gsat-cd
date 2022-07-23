var countdowns = require('./config/countdowns.json');
let index = 0;
const speed = 5;
let pressed = [false, false, false, false];

let calculateCD = function () {
    let nameDisplay = document.getElementsByClassName('name');
    index++;
    index %= countdowns.length * 5;
    [].forEach.call(nameDisplay, function (element) {
        element.textContent = countdowns[Math.floor(index / 5)].name;
    });

    let timeDisplay = document.getElementsByClassName('cd');
    [].forEach.call(timeDisplay, function (element) {
        var epoch = Math.floor((new Date()).getTime() / 1000)
        element.textContent = Math.ceil((countdowns[Math.floor(index / 5)].time - epoch) / (24 * 60 * 60));
    });
}

let move = function () {
    let movementX = pressed[2] * -speed + pressed[3] * speed,
        movementY = pressed[1] * -speed + pressed[0] * speed;
    window.moveTo(window.screenX + movementX, window.screenY + movementY);
}

addEventListener('blur', event => { 
    pressed = [false, false, false, false];
});

window.onload = function () {
    window.moveTo(window.screen.availWidth - 250, window.screen.availHeight - 250);
    index = 0;
    calculateCD();
    var timeUpdater = setInterval(calculateCD, 1000);
    var positionUpdater = setInterval(move, 20);
};

document.addEventListener('keydown', (event) => {

    if (event.defaultPrevented)
        return;
    event.preventDefault();

    if (event.ctrlKey && event.shiftKey && (event.key === "C" || event.key === "c")) {
        window.close();
        return;
    }
    switch (event.key) {
        case "ArrowDown":
            pressed[0] = true;
            break;
        case "ArrowUp":
            pressed[1] = true;
            break;
        case "ArrowLeft":
            pressed[2] = true;
            break;
        case "ArrowRight":
            pressed[3] = true;
            break;
        default:
            return;
    }
}, true);

document.addEventListener('keyup', (event) => {

    if (event.defaultPrevented)
        return;
    event.preventDefault();

    if (event.ctrlKey && event.shiftKey && (event.key === "C" || event.key === "c")) {
        window.close();
        return;
    }
    switch (event.key) {
        case "ArrowDown":
            pressed[0] = false;
            break;
        case "ArrowUp":
            pressed[1] = false;
            break;
        case "ArrowLeft":
            pressed[2] = false;
            break;
        case "ArrowRight":
            pressed[3] = false;
            break;
        default:
            return;
    }
}, true);
