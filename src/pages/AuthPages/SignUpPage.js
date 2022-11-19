import React, {useState} from "react";
import {ButtonState, CommonText, mainColor, MainText, Wrapper} from "./styled";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {object, string} from "yup";
import {signUp} from "../../api/data/auth";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

const schema = object({
    firstName: string().required("Necessary field"),
    lastName: string().required("Necessary field"),
    email: string().required("Necessary field").email("Please, enter a correct email"),
    password: string().required("Necessary field"),
    repeatPassword: string().required("Necessary field"),
})

const SignUp = () => {
    const navigator = useNavigate()
    const [openDialog, setOpenDialog] = useState(false)
    const [errorText, setErrorText] = useState(null)
    const [isError, setError] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {},
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setErrorText(null)
        if(!isError){
            navigator('/auth')
        }
    }

    const handleOpenDialog = (success, text) => {
        setOpenDialog(true)
        setErrorText(text)
        if(success){
            setError(false)
        } else {
            setError(true)
        }
    }

    const onSubmit = ({firstName, lastName, email, password, repeatPassword}) => {
        if(password !== repeatPassword){
            handleOpenDialog(false, "Please, enter same passwords")
        } else {
            signUp(firstName, lastName, email, password)
                .then(() => handleOpenDialog(true, "Account was successfully created"))
                .catch(() => handleOpenDialog(false, "Something went wrong. Please, try later"))
        }
    }

    return (<>
            <Wrapper style={{height: '600px'}}>
                <MainText>Sign Up</MainText>
                <form onSubmit={handleSubmit(onSubmit)} style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
                    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '5px', rowGap: '10px'}}>
                        <TextField {...register("firstName")}
                                   error={!!errors?.firstName}
                                   helperText={errors?.firstName?.message}
                                   style={{flex: '40%'}}
                                   placeholder={"FirstName"}/>
                        <TextField {...register("lastName")}
                                   error={!!errors?.lastName}
                                   helperText={errors?.lastName?.message}
                                   style={{flex: '40%'}}
                                   placeholder={"Lastname"}/>
                        <TextField {...register("email")}
                                   error={!!errors?.email}
                                   helperText={errors?.email?.message}
                                   style={{flex: '1 1 100%'}}
                                   placeholder={"Email"}/>
                        <TextField {...register("password")}
                                   error={!!errors?.password}
                                   helperText={errors?.password?.message}
                                   style={{flex: '1 1 100%'}}
                                   placeholder={"Password"}
                                   type={"password"}/>
                        <TextField {...register("repeatPassword")}
                                   error={!!errors?.repeatPassword}
                                   helperText={errors?.repeatPassword?.message}
                                   style={{flex: '1 1 100%'}}
                                   placeholder={"Confirm password"}
                                   type={"password"}/>
                    </div>

                    <ButtonState type={"submit"}>Sign up</ButtonState>
                    <span style={{display: 'flex', justifyContent: 'center', columnGap: '5px'}}>
                      <CommonText style={{color: "grey"}}>Already have an account</CommonText>
                      <CommonText style={{color: mainColor, textDecoration: 'underline'}} onClick={() => navigator("/auth")}>
                          Sign In
                      </CommonText>
                  </span>
                </form>
            </Wrapper>
            <ConfirmDialog open={openDialog} handleClose={handleCloseDialog} text={errorText}/>
        </>
    );
}

export default SignUp;
