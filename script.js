// DARK MODE
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// TYPING EFFECT
const text = "Syed Mohammer Ahsan Abidi";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();