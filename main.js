//blocco animazioni
const titolo = document.getElementById("financialDashboard");
const slogan = document.getElementById("slogan");
const cardLogin = document.getElementById("loginCard");

window.addEventListener("load", () => {
  titolo.classList.remove("opacity-0", "scale-75");
  slogan.classList.remove("opacity-0", "scale-75");
  cardLogin.classList.remove("translate-y-8", "opacity-0", "scale-95");
})

//blocco funzione login con dichiarazioni e funzione
const pulsLogin = document.getElementById("bottoneLogin");

const form = document.getElementById("loginForm")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  document.getElementById("paginaLogin").classList.add("hidden");
  document.getElementById("paginaPrincipale").classList.remove("hidden");
});
