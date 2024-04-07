import Register from '@/components/registration/Register'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

async function Registration() {
  const session = await getServerSession(authOptions);
  if(session) redirect("/home");
  return (
    <Register />
  )
} 

export default Registration
