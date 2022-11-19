import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {remindPasword} from "../../api/data/auth";
import {ButtonState, MainText, Wrapper} from "./styled";
import {TextField} from "@mui/material";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

const RemindPassword = () => {
    const navigator = useNavigate()
    const [openDialog, setOpenDialog] = useState(false)
    const [errorText, setErrorText] = useState(null)
    const [step, setStep] = useState(1)
    const [remindData, setRemindData] = useState({})

    const updateRemindData = (fieldName, fieldValue) => {
        setRemindData(prev => {
            return {...prev, [fieldName]: fieldValue}
        })
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setErrorText(null)
    }

    const handleFinishRemind = () => {
        setOpenDialog(false)
        setErrorText(null)
        navigator('/auth')
    }

    const handleOpenDialog = (text) => {
        setOpenDialog(true)
        setErrorText(text)
    }

    const onSubmitSending = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(step === 1){
            if(remindData?.email && remindData.email.includes("@")){
                remindPasword(remindData.email)
                    .then(result => setStep(2))
                    .catch(() => handleOpenDialog("This email isn't registered in our system"))
            } else {
                handleOpenDialog("Please, enter a correct email")
            }

            return;
        } else if (step === 2){
            if(remindData?.code && remindData.code.length === 4){
                // checkCode(remindData.email, remindData.code)
                //     .then(result => setStep(3))
                //     .catch(() => handleOpenDialog("Please, enter a correct code"))
                setStep(3)
            } else {
                handleOpenDialog("Please, enter a correct code")
            }

            return;
        } else {
            if(remindData?.password && remindData?.repeatPassword
                && (remindData.password === remindData.repeatPassword)){
                // checkCode(remindData.email, remindData.code)
                //     .then(result => setStep(3))
                //     .catch(() => handleOpenDialog("Please, enter a correct code"))
                handleOpenDialog("Your password was successfully changed.")
                setStep(3)
            } else {
                handleOpenDialog("Please, enter same password")
            }
        }
    }

    return (<>
            <div style={{position: 'fixed', top: 0, right: 10, display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                onClick={() => navigator('/auth')}
            >
                <MainText style={{fontSize: '1.5rem', marginBlockStart: '0px'}}>Sign In</MainText>
            </div>
            <Wrapper style={{height: '300px'}}>
                <MainText>Remind password</MainText>

                {step === 1 && (
                    <form style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
                            <TextField onChange={(e) => updateRemindData("email", e.target.value)}
                                       style={{width: '100%'}}
                                       placeholder={"Email"}/>
                        </div>

                        <ButtonState onClick={e => onSubmitSending(e)}>Get a code</ButtonState>
                    </form>
                )}

                {step === 2 && (
                    <form style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
                            <TextField InputProps={{
                                readOnly: true
                            }} style={{width: '100%'}} placeholder={"Code"} value={remindData.email}/>
                            <TextField onChange={(e) => updateRemindData("code", e.target.value)}
                                       style={{width: '100%'}}
                                       placeholder={"Code"}/>
                        </div>

                        <ButtonState onClick={(e) => onSubmitSending(e)}>Admit the code</ButtonState>
                    </form>
                )}

                {step === 3 && (
                    <form style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
                            <TextField onChange={(e) => updateRemindData("password", e.target.value)}
                                       style={{width: '100%'}}
                                       placeholder={"Password"}/>
                            <TextField onChange={(e) => updateRemindData("repeatPassword", e.target.value)}
                                       style={{width: '100%'}}
                                       placeholder={"Repeat password"}/>
                        </div>

                        <ButtonState onClick={(e) => onSubmitSending(e)}>Change a password</ButtonState>
                    </form>
                )}
            </Wrapper>
            <ConfirmDialog open={openDialog} handleClose={step === 3 ? handleFinishRemind : handleCloseDialog} text={errorText}/>
        </>
    );
};

export default RemindPassword;