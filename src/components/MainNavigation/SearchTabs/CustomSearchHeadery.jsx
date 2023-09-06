import { Box, Typography } from '@mui/material';

export const CustomSearchHeader = (props) => {
    const { value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{
                    p: 3,
                    fontWeight: 700
                }}>
                    <Typography variant='h4'>{props.children}</Typography>
                </Box>
            )}
        </div>
    );
}