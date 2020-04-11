document.getElementById("button").addEventListener('click', () => {
    document.getElementById("button").setAttribute("style", "opacity: 0.5");
    document.getElementById("button").setAttribute("style", "z-index: 2");
    document.getElementById("bigform").setAttribute("style", "border: 2px solid hsl(0, 93%, 68%);");
    document.getElementsByClassName("error-message")[0].style.display = 'block';
    document.getElementsByClassName("error-icon")[0].style.display = 'block';
});

document.getElementById("bigform").setCustomValidity(" ");