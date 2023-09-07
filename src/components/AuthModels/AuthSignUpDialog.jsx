import { TextField, Box } from '@mui/material'
import { ButtonDefault } from "../ui/Button"
import { useState } from 'react';

export const AuthSignUpDialog = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        zip: ''
    });
    const handelRegister = (event) => {
        event.preventDefault();
        if(userData.password !== userData.passwordConfirm) {

            return;
        }
        const userInfo = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            phone: userData.phone,
            address: userData.address,
            city: userData.city,
            country: userData.country,
            zip: userData.zip
        };
        
    }
    return (
        <Box sx={{display: 'flex', flexFlow: 'column', gap: '1.2rem' }} 
        component='form'
        noValidate='off'
        autoComplete='off'
        onSubmit={handelRegister}>
            <TextField
                required
                size='small'
                type='text'
                id="outlined-first-name"
                label="First Name"
                placeholder='First Name'
                fullWidth
                value={userData.firstName}
                onChange={(event) => setUserData({...userData, firstName: event.target.value})}
            />
            <TextField
                size='small'
                type='text'
                id="outlined-last-name"
                label="Last Name"
                placeholder='Last Name'
                fullWidth
                value={userData.lastName}
                onChange={(event) => setUserData({...userData, lastName: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='email'
                id="outlined-email"
                label="Email"
                placeholder='Enter email'
                fullWidth
                value={userData.email}
                onChange={(event) => setUserData({...userData, email: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='password'
                id="outlined-password"
                label="Password"
                placeholder='Password'
                fullWidth
                value={userData.password}
                onChange={(event) => setUserData({...userData, password: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='password'
                id="outlined-password-confirm"
                label="Confirm Password"
                placeholder='Confirm Password'
                fullWidth
                value={userData.passwordConfirm}
                onChange={(event) => setUserData({...userData, passwordConfirm: event.target.value})}
            />
            <TextField
                size='small'
                type='tel'
                id="outlined-phone"
                label="Phone Number"
                placeholder='Phone Number'
                fullWidth
                value={userData.phone}
                onChange={(event) => setUserData({...userData, phone: event.target.value})}
            />
            <TextField
                size='small'
                type='text'
                id="outlined-address"
                label="Address"
                placeholder='Address'
                fullWidth
                value={userData.address}
                onChange={(event) => setUserData({...userData, address: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='text'
                id="outlined-city"
                label="City"
                placeholder='City'
                fullWidth
                value={userData.city}
                onChange={(event) => setUserData({...userData, city: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='text'
                id="outlined-Country"
                label="Country"
                placeholder='Country'
                fullWidth
                value={userData.country}
                onChange={(event) => setUserData({...userData, country: event.target.value})}
            />
            <TextField
                required
                size='small'
                type='number'
                id="outlined-zip"
                label="Zip Code"
                placeholder='Zip Code'
                fullWidth
                value={userData.zip}
                onChange={(event) => setUserData({...userData, zip: event.target.value})}
            />
            <ButtonDefault type='submit' buttonName='Continue with Email' />
        </Box>
    )
}