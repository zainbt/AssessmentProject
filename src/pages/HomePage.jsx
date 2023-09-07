import { Box } from '@mui/material'
import React from 'react'
import CustomCard from '../components/ui/card/Card'
import TabsSlider from '../components/ui/TabsSlider'

const HomePage = () => {
  return (
    <Box m={{ xs: "1rem 2rem", sm: "2rem 3rem", md: "4rem 8rem" }}>
       <TabsSlider/>
       <CustomCard/>
    </Box>
  );
}

export default HomePage
