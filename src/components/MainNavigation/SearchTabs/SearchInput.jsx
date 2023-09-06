import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = (props) => {
    const [query, setQuery] = useState("");
    const { value, index, placeholder } = props; // value is the current tab index, index is the index of the tab


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <Box sx={{
                display: 'flex',
                maxWidth: '50%',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <TextField
                    sx={{
                        mt: 2,
                        mb: 2,
                        backgroundColor: 'white',
                        padding: 0,
                    }}
                    size="small"
                    id="search-bar"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    inputProps={{
                        className: "search-bar",
                    }}
                    variant="outlined"
                    fullWidth
                />
                <IconButton sx={{
                    backgroundColor: '#c82021',
                    borderRadius: '0px'
                }}>
                    <SearchIcon />
                </IconButton>
            </Box >
        </div>
    );
}

