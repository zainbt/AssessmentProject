import { AuthButtons, AuthWrapper } from "../../StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui";
import Dialog from "../../ui/Modal";
import { AuthSignUpDialog } from "../../AuthModels/AuthSignUpDialog";
import { AuthSignInDialog } from "../../AuthModels/AuthSignInDialog";


export const AuthComponent = () => {
    const isSignin = useSelector(state => state.ui.isSignIn);
    const dispatch = useDispatch();
    const handleLoginButton = (event) => {
        event.preventDefault();
        dispatch(uiActions.toggleModal());
        dispatch(uiActions.updateIsSignin(true));
    }
    const handleRegisterButton = (event) => {
        event.preventDefault();
        dispatch(uiActions.toggleModal());
        dispatch(uiActions.updateIsSignin(false));
    }

    return (
        <AuthWrapper>
            <AuthButtons size='small' variant='outlined' onClick={handleLoginButton}>Log In</AuthButtons>
            <AuthButtons size='small' variant='outlined' onClick={handleRegisterButton}>Sign Up</AuthButtons>
            <Dialog>
                {isSignin ? <AuthSignInDialog /> : <AuthSignUpDialog />}
            </Dialog>
        </AuthWrapper>
    );
}