import { supabase } from "./supabaseClient.js"

export async function loginUser(email, password) {
  try{

  const {data, error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  
  if(error){
    return {
    success: false,
    message: error.message,
    }
  }
    return{
    success: true,
    user: data.user,
    }
  }catch(error){
    return{
    success: false,
    message: "errore di connessione",
    }
  }
}