"use server";

import { redirect } from "next/navigation";
import apiFetch from "./apiClient";
import { cookies } from "next/headers"; 

export async function getExpenseDashboardSummary() {
  return await apiFetch("/expenses/summary", { method: "GET" }) || [];
}
export async function getHistory() {
  return await apiFetch("/expenses/history", { method: "GET" }) || [];
}

export async function getExpenseByFriendId(id: number) {
  return await apiFetch(`/expenses/member/${id}`, { method: "GET" }) || [];
}

export const saveExpense = async (formData:any) => {
    console.log("Form Data in Service:", formData);
  await apiFetch("/expenses", { method: "POST",body: JSON.stringify(formData) }) || [];
  redirect("/dashboard");
}

export const getLoginUser = async () => {
    const cookieStore = await cookies();
    const loginUser = cookieStore.get("login-user")?.value || null;
    const user = loginUser ? JSON.parse(loginUser) : null;
    return user;
}