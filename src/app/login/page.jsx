import Login from '@/components/loginPage/Login'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

async function LoginPage() {
  const session = await getServerSession(authOptions);
  if(session) redirect("/home");
  return (
    <Login />
  )
}

export default LoginPage
