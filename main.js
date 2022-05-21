var calculateCD = function () {
    var failedp = document.getElementsByClassName('cd');
    [].forEach.call(failedp, function (element) {
        var epoch = Math.floor((new Date()).getTime() / 1000)
        element.textContent = Math.ceil((1673539200 - epoch) / (24 * 60 * 60));
    });

}

window.onload = function () {
    window.moveTo( window.screen.availWidth - 250, window.screen.availHeight - 250);
    calculateCD();
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
