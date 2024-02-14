function moveButton() {
    var btn = document.querySelector('.btn');
    var x = 0;
    var y = 0;
    var dx = 5; // Изменение координаты X
    var dy = 5; // Изменение координаты Y
    var containerWidth = window.innerWidth - btn.offsetWidth;
    var containerHeight = window.innerHeight - btn.offsetHeight;

    var moveInterval = setInterval(function() {
        if (x >= containerWidth || y >= containerHeight || x <= 0 || y <= 0) {
            clearInterval(moveInterval);
            btn.style.transform = 'translate(0, 0)';
        } else {
            btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            x += dx;
            y += dy;
        }
    }, 30);
}