document.getElementById("button").addEventListener('click', () => {
    if (document.getElementById('bigform').validity.typeMismatch) {
        document.getElementById("button").setAttribute("style", "opacity: 0.5");
        document.getElementById("button").setAttribute("style", "z-index: 2");
        document.getElementById("button").setAttribute("style", "background: linear-gradient(135deg, hsl(0, 90%, 96%), hsl(0, 84%, 84%))");
        document.getElementById("bigform").setAttribute("style", "border: 2px solid hsl(0, 93%, 68%);");
        document.getElementsByClassName("error-message")[0].style.display = 'block';
        document.getElementsByClassName("error-icon")[0].style.display = 'block';
    } else {
        document.getElementById("button").setAttribute("style", "opacity: 1");
        document.getElementById("button").setAttribute("style", "z-index: 2");
        document.getElementById("button").setAttribute("style", "background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))");
        document.getElementById("bigform").setAttribute("style", "border-color: hsl(0, 36%, 70%);");
        document.getElementsByClassName("error-message")[0].style.display = 'none';
        document.getElementsByClassName("error-icon")[0].style.display = 'none';
    }
});

document.getElementById("bigform").setCustomValidity(" ");