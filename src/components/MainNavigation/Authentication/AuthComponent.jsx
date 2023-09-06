import { AuthButtons, AuthWrapper } from "../../StyledComponents";


export const AuthComponent = () => {
    const handleLoginButton = (event) => {
        event.preventDefault();
    }
    const handleRegisterButton = (event) => {
        event.preventDefault();
    }

    return (
        <AuthWrapper>
            <AuthButtons size='small' variant='outlined' onClick={handleLoginButton}>Log In</AuthButtons>
            <AuthButtons size='small' variant='outlined' onClick={handleRegisterButton}>Sign Up</AuthButtons>
        </AuthWrapper>

    );
}