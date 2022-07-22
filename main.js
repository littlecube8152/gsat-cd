var countdowns = require('./config/countdowns.json');
var index = 0;

var calculateCD = function () {
    var nameDisplay = document.getElementsByClassName('name');
    index++;
    index %= countdowns.length * 5;
    [].forEach.call(nameDisplay, function (element) {
        element.textContent = countdowns[Math.floor(index / 5)].name;
    });
    
    var timeDisplay = document.getElementsByClassName('cd');
    [].forEach.call(timeDisplay, function (element) {
        var epoch = Math.floor((new Date()).getTime() / 1000)
        element.textContent = Math.ceil((countdowns[Math.floor(index / 5)].time - epoch) / (24 * 60 * 60));
    });
}

window.onload = function () {
    window.moveTo(window.screen.availWidth - 250, window.screen.availHeight - 250);
    calculateCD();
    index = 0;
    var t = setInterval(calculateCD, 1000);
};

document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented)
        return;
    if (event.ctrlKey && event.shiftKey && (event.key === "C" || event.key === "c")) {
        window.close();
    } else {
        switch (event.key) {
            case "ArrowDown":
                window.moveTo(window.screenX, window.screenY + 40);
                break;
            case "ArrowUp":
                window.moveTo(window.screenX, window.screenY - 40);
                break;
            case "ArrowLeft":
                window.moveTo(window.screenX - 40, window.screenY);
                break;
            case "ArrowRight":
                window.moveTo(window.screenX + 40, window.screenY);
                break;
            default:
                return;
        }
    }
    event.preventDefault();
}, true);
