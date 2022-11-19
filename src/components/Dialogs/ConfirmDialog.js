import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {ButtonState, CommonText} from "./styled";

const ConfirmDialog = ({open, handleClose, text}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{textAlign: 'center', background: "#00b78b"}}>
                <CommonText style={{fontSize: '1.5rem'}}>Message</CommonText>
            </DialogTitle>
            <DialogContent>
                <CommonText style={{color: 'black', fontSize: '1rem', margin: '20px 0px 0px 0px'}}>
                    {text}
                </CommonText>
            </DialogContent>
            <DialogActions>
                <ButtonState onClick={handleClose}>Ok</ButtonState>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;