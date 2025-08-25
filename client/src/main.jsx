// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {AppContextProvider} from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY 

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

// pack the AppContextProvider block into clerk provider  

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' >
    {/* After siging out user will be redirected to Home page */}
      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
)
