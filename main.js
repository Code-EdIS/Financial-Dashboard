import { supabase } from "./modules/supabaseClient.js"

import * as funzioni from "./modules/api.js"

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
const form = document.getElementById("loginForm");

const cardConto = document.getElementById("cardTotale");

const cardTrans = document.getElementById("cardTransizioni");

function mostraDashboard(){
  document.getElementById("paginaLogin").classList.add("hidden");
    
    document.getElementById("paginaPrincipale").classList.remove("hidden");
  
    cardConto.offsetHeight;
    cardTrans.offsetHeight;
  
      cardConto.classList.remove("opacity-0", "scale-75");
      cardTrans.classList.remove("translate-y-8", "scale-95", "opacity-0");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const { data: {session}} = await supabase.auth.getSession();
  
  if(session){
    mostraDashboard();
  }else{
    const mail = form.querySelector("input[type='email']").value;
    const password = form.querySelector("input[type='password']").value;
    
    const res = await funzioni.loginUser(mail, password);
    
    if(res.success){
      mostraDashboard();
    }else{
      alert(res.message);
    }
  }
});
