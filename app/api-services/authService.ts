"use server"; 

import { cookies } from "next/headers";
import { redirect  } from "next/navigation";
import { setFlashMessage, setToken, setUser } from "./commonService";
interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData{
  email:string,
  password:string,
  name:string
}

export const login = async (formData:any) => {
    
  const requestData = Object.fromEntries(formData.entries()) as LoginFormData;
  const {email,password} = requestData;

  const res = await fetch(`${process.env.API_URL || "https://api.expensehub.online"}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        // expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., access_token) in the request
    });
  const loginUser = await res.json();
  if (loginUser.access_token) {
    await setToken(loginUser.access_token);
    await setUser(loginUser);
    await setFlashMessage("Login Successful");
    redirect("/dashboard");
  } else {
    await setFlashMessage("Login Failed: Invalid credentials");
  }
}


export const registerUser = async (formData:any) => {
    
  const requestData = Object.fromEntries(formData.entries()) as RegisterFormData;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  if (!requestData.password || requestData.password.length < 8 || !passwordRegex.test(requestData.password)) {
    await setFlashMessage("Password must have 8+ chars, 1 uppercase, 1 number, 1 symbol");
    return;
  }
  const res = await fetch(`${process.env.API_URL || "https://api.expensehub.online"}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

  const response = await res.json();
  console.log("Registered User:", response);
  if(response.id){
    await setFlashMessage("Registration Successful");
    redirect('/login');
  }else{
    await setFlashMessage(`${response.message}` || "Registration Failed: Invalid data  provided");
  }
}


export const logout = async () => {
  (await cookies()).delete("token");
    await setFlashMessage("Logout Successful");
  redirect("/login");
}