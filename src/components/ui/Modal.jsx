import * as React from 'react';
import { DialogActions, DialogTitle, IconButton, DialogContent, Box, TextField, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import { BootstrapDialog } from '../StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonDefault, ButtonOauth } from './Button';


export default function Dialog(props) {
  const isOpen = useSelector(state => state.ui.modalOpen);
  const dispatch = useDispatch();
  const handleDialog = () => dispatch(uiActions.toggleModal());

  return (
    <Box  >
      <BootstrapDialog
        onClose={handleDialog}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-start', m: 0, p: 2 }} id="customized-dialog-title">
          Join us or Sign in
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
          <Box sx={{ minWidth: '250px', display: 'flex', flexFlow: 'column', gap: '1.2rem' }} >
            {props.children}
            <Divider />
            <ButtonOauth />
            <Divider />
            <Typography textAlign='start' variant='body2'>By continuing, you agree to our Terms of Use and Privacy Policy.</Typography>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
}