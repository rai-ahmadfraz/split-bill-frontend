// 'use client';
import React from 'react'
import { logout } from '../api-services/authService';
const LogoutBtn = () => {
  return (
      <button onClick={logout}>Logout</button>
  )
}
export default LogoutBtn;
