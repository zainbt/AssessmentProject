import { useDispatch } from "react-redux";
import "./App.css";
import { MainNavigationCard } from "./components/MainNavigation/MainNavigationCard";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "./api/properties";
import { properties } from "./store/properties";
import CustomCard from "./components/ui/card/Card";
import { Box } from "@mui/material";

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
    <>
      <MainNavigationCard />
      <Box sx={{ padding: "80px" }}>
        <CustomCard />
      </Box>
    </>
  );
}

export default App;
