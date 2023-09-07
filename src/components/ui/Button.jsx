import { ButtonDefaultWrapper, ButtonOauthWrapper } from '../StyledComponents';
import { Google } from '@mui/icons-material';


export const ButtonDefault = (props) => {
    return (
        <ButtonDefaultWrapper onClick={props.onClick} type={props.type} size='large' variant='outlined' fullWidth>
            {props.buttonName}
        </ButtonDefaultWrapper>
    )
}

export const ButtonOauth = (props) => {
    return (
            <ButtonOauthWrapper onClick={props.onClick} size='large' variant='outlined' fullWidth>
                < Google />
                Continue with Google
            </ButtonOauthWrapper>
    )
}