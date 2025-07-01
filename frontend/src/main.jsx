import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './app.routes.jsx';
import { AuthProvider } from './context/authContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>  
      <AppRoutes />
    </AuthProvider>
  </StrictMode>,
)
