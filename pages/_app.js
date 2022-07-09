// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <a href="/api/auth/login" className="text-9xl font-bold">Login</a>
      <Component {...pageProps} />
    </UserProvider>
  );
}