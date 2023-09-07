import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "./api/properties";
import { properties } from "./store/properties";
import { theme } from "./theme/Theme";
import CustomCard from "./components/ui/card/Card";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  },

]);

function App() {
  const dispatch = useDispatch();

  const videosQuery = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
    onSuccess: (data) => {
      // Dispatch the action to set Properties
      dispatch(properties(data.properties));
    },
  });
  if (videosQuery?.isLoading) return <h1>Loading...</h1>;
  if (videosQuery?.error) {
    return <pre>{JSON.stringify(videosQuery.error)}</pre>;
  }
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
