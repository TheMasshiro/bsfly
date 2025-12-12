import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

const container = document.getElementById('root');
const root = createRoot(container!);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

root.render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{
            theme: dark
        }}>
            <App />
        </ClerkProvider>
    </React.StrictMode>
);
