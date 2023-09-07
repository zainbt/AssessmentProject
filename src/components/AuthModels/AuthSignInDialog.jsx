import { Box, TextField } from '@mui/material'
import { ButtonDefault } from "../ui/Button"
import { useState } from 'react';

export const AuthSignInDialog = () => {
    const [credentials, setredentials] = useState({
        email: '',
        password: ''
    })

    const handelLogin = (event) => {
        event.preventDefault();
        const userCreds = {
            email: credentials.email,
            password: credentials.password
        };
        console.log(userCreds);
    }

    return (
        <Box sx={{ display: 'flex', flexFlow: 'column', gap: '1.2rem' }}
            component='form'
            noValidate='off'
            autoComplete='off'
            onSubmit={handelLogin} >
            <TextField
                required
                size='small'
                type='email'
                id="outlined-email"
                label="Email"
                placeholder='Enter email'
                value={credentials.email}
                onChange={(event) => setredentials({ ...credentials, email: event.target.value })}
                fullWidth
            />
            <TextField
                required
                size='small'
                type='password'
                id="outlined-password"
                label="Password"
                placeholder='Password'
                value={credentials.password}
                onChange={(event) => setredentials({ ...credentials, password: event.target.value })}
                fullWidth
            />
            <ButtonDefault type='submit' buttonName='Continue with Email' />
        </Box>
    )
}