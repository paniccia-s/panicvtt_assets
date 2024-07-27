function initialize() {
    window.addEventListener('resize', draw, false);
}

function draw() {
    var canvas = document.getElementById("vtt_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}