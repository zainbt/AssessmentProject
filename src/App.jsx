import { ThemeProvider } from '@emotion/react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { theme } from './theme/Theme';  


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  }
]);


function App() {
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
