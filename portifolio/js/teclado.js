const texto = "WELCOME";
const welcomeText = document.getElementById("welcomeText");

let i = 0;
function typeWelcomeText() {
  if (i < texto.length) {
    welcomeText.innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWelcomeText, 150);
  }
}

typeWelcomeText();
