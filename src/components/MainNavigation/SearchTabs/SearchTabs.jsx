import { Box } from '@mui/material'
import { useState } from 'react'
import { SearchTabsWrapper, SearchTabWrapper } from '../../StyledComponents';
import { CustomSearchHeader } from './CustomSearchHeadery';
import { SearchInput } from './SearchInput';

const tabs = [{
    tabName: 'Buy'
},
{
    tabName: 'Rent'
},
{
    tabName: 'Sell'
}];

export const SearchTabs = () => {

    const [value, setValue] = useState(0);
    const tabItems = tabs.map((tab, index) => (<SearchTabWrapper
        key={tab.tabName}
        label={tab.tabName}
        id={`tab-${index}`}
        aria-controls={`simple-tabpanel-${index}`} />))
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: 'column',
            p: 5,
            paddingTop: 0,
        }}>
            <Box sx={{
                display: 'flex',
                flexFlow: 'column'
            }}>
                <CustomSearchHeader value={value} index={0}>Search with Redfin.<br /> Tour with a Redfin agent.</CustomSearchHeader>
                <CustomSearchHeader value={value} index={1}>Local rentals <br /> at your fingertips.</CustomSearchHeader>
                <CustomSearchHeader value={value} index={2}>1% listing fee <br /> when you sell.</CustomSearchHeader>
            </Box>
            <Box >
                <SearchTabsWrapper
                    value={value} onChange={(e, newValue) => { setValue(newValue) }} aria-label="basic tabs example">
                    {tabItems}
                </SearchTabsWrapper>
                <SearchInput />
            </Box>
        </Box>
    )
}

