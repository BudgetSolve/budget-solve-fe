import React, {useState} from "react";
import {ButtonState, CommonText, mainColor, MainText, Wrapper} from "./styled";
import {Checkbox, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {signIn} from "../../api/data/auth";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

const schema = object({
    email: string().required("Necessary field"),
    password: string().required("Necessary field")
})

export default function AuthPage() {
    const navigator = useNavigate()
    const [rememberChecked, setRememberCheck] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [errorText, setErrorText] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        getValues,
        clearErrors
    } = useForm({
        defaultValues: {},
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setErrorText(null)
    }

    const handleOpenDialog = () => {
        setOpenDialog(true)
        setErrorText("Please, enter correct credentials")
    }

    const onSubmit = ({email, password}) => {
        signIn(email, password).then(() => {
            window.location = "/team"
        }).catch(() => handleOpenDialog())
    }

    return (<>
        <Wrapper style={{height: '500px'}}>
          <MainText>Sign In</MainText>

          <form onSubmit={handleSubmit(onSubmit)} style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
                  <TextField {...register("email")}
                             error={!!errors?.email}
                             helperText={errors?.email?.message}
                             style={{width: '100%'}}
                             placeholder={"Email"}/>
                  <TextField {...register("password")}
                             error={!!errors?.password}
                             helperText={errors?.password?.message}
                             placeholder={"Password"}
                             style={{width: '100%'}}
                             type={"password"}
                  />
              </div>

              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: "center"}} onClick={() => setRememberCheck(!rememberChecked)}>
                      <Checkbox
                          checked={rememberChecked}
                          name="checkedB"
                          style={{color: mainColor}}
                      />
                      <CommonText style={{color: mainColor}}>Remember me</CommonText>
                  </div>
                  <CommonText style={{color: mainColor, textDecoration: 'underline'}} onClick={() => navigator('/remind-password')}>Remind password</CommonText>
              </div>

              <ButtonState type={"submit"}>Sign in</ButtonState>
              <span style={{display: 'flex', justifyContent: 'center', columnGap: '5px'}}>
                  <CommonText style={{color: "grey"}}>Not have an account</CommonText>
                  <CommonText style={{color: mainColor, textDecoration: 'underline'}} onClick={() => navigator("/sign-up")}>
                      Sign Up
                  </CommonText>
              </span>
          </form>
        </Wrapper>
        <ConfirmDialog open={openDialog} handleClose={handleCloseDialog} text={errorText}/>
    </>
    );
}
