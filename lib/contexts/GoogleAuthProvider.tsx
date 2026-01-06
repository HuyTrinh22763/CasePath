"use client"

import { GoogleOAuthProvider } from "@react-oauth/google"
import React from "react"

export function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  // IMPORTANT: You need to replace this Client ID with your actual one from Google Cloud Console
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID_HERE"
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  )
}
