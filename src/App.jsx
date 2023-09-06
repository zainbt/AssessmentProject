import { ThemeProvider } from '@emotion/react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  }
]);


function App() {
  const dispatch = useDispatch();

  const videosQuery = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
    onSuccess: (data) => {
      // Dispatch the action to set Properties
      dispatch(properties(data.properties));
      console.log("🚀 ~ file: App.jsx:18 ~ App ~ data:", data);
    },
  });
  if (videosQuery?.isLoading) return <h1>Loading...</h1>;
  if (videosQuery?.error) {
    return <pre>{JSON.stringify(videosQuery.error)}</pre>;
  }
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
