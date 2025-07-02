import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './app.routes.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { FieldsInfoProvider } from './context/fieldsInfosContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <FieldsInfoProvider>
        <AppRoutes />
      </FieldsInfoProvider>
    </AuthProvider>
  </StrictMode>,
)
