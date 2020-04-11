document.getElementById("button").addEventListener('click', () => {
    document.getElementById("bigform").setAttribute("style", "border: 2px solid hsl(0, 93%, 68%);");
    document.getElementsByClassName("error-message")[0].style.display = 'block';

});

document.getElementById("bigform").setCustomValidity(" ");