import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { BarButtonsWrapper, SearchBarWrapper, SearchButtonWrapper, SearchTextWrapper } from "../../StyledComponents";

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
            <SearchBarWrapper >
                <SearchTextWrapper
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
                <SearchButtonWrapper>
                    <SearchIcon />
                </SearchButtonWrapper>
            </SearchBarWrapper >
        </div>
    );
}