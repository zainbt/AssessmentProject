import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

const CustomCard = ({ address, price, imageUrl,bath,bed,area,count }) => {
    return (
        <Card sx={{ maxWidth: 400,boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={'Image'}
            />
            <CardContent>
                <Box width="100%" display="inline-flex" justifyContent="space-between">
                    <Typography variant="h5" gutterBottom>
                        ${price}
                    </Typography>
                    <Box display="inline-flex" alignItems="center" gap={1}>
                        <IconButton color="primary" variant="contained">
                            <ThumbUp />
                        </IconButton>
                        <Typography variant='body1'>{count || 0}</Typography>
                        <IconButton color="error" variant="contained">
                            <ThumbDown />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="body1" textAlign="left" gutterBottom>
                    {`${bed || '-'}Bed ${bath || '-'}Bath ${area || '-'}Sq.Ft.`}
                </Typography>
                <Typography variant="body2" textAlign="left" color="text.secondary">
                    {address}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
