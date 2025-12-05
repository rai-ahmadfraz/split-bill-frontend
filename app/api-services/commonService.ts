"use server"; 

import { cookies } from "next/headers";

const cookiesOptions = {
  httpOnly: false,
  secure: process.env.NODE_ENV === "production" || false,
  sameSite: "lax" as const,
  path: "/",
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),

};
export const setTheme = async (themeColor: string) => {
    const cookieStore = await cookies();
    cookieStore.set("theme", themeColor, cookiesOptions);
}

export const getTheme = async () => {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value || 'light';
    return theme;
}

export const setFlashMessage = async (message: string) => {
  const cookieStore = await cookies();
  cookieStore.set("flash_message", message, cookiesOptions);
};


export const getFlashMessage = async () => {
  const cookieStore = await cookies();
  const message = cookieStore.get("flash_message")?.value || '';
  return message;
}

export const deleteFlashMessage = async () => {
  (await cookies()).set("flash_message", '', cookiesOptions);
};


export const setToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("token",token, cookiesOptions);
}
export const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || '' ;
}


export const setUser = async (user:any) => {
  const cookieStore = await cookies();
  cookieStore.set("login-user",JSON.stringify(user), cookiesOptions);
}
export const getUser = async () => {
  const cookieStore = await cookies();
  return JSON.parse(cookieStore.get("login-user")?.value || '{}');
}