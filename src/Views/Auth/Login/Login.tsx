import { Button, Checkbox, FormLabel, Grid, GridItem, Input, Text, useToast, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { PostLoginRequest, ResetError } from '../AuthRedux/AuthAction';
import { LoginForm } from '../AuthRedux/AuthConstants';

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const onSubmit: SubmitHandler<LoginForm> = data => dispatch(PostLoginRequest(data));

    const Login = useSelector((state: RootStateOrAny) => state.Auth)
    const Firebase = useSelector((state: RootStateOrAny) => state.firebase)
    useEffect(() => {
        if (Firebase.auth.uid) {
            history.push("/dashboard/profile");
        } else if (Login.LoginError) {
            toast({
                title: "Login Failed.",
                description: Login.LoginError,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
                onCloseComplete: () => dispatch(ResetError())
            })
        }
    })
    return (
        <Grid m="100px 50px" templateColumns="repeat(1,1fr)" >
            <GridItem colSpan={1}>
                <Text fontSize={24}>
                    Hello there!
                </Text>
                <Text>
                    Please sign in or <Link to="/auth/register" style={{ color: "dodgerblue" }}>create an account</Link> to continue.
                </Text>
                <VStack mt={30} alignItems="flex-start">
                    <Text>SIGN IN</Text>
                    <form style={{ width: 400 }} onSubmit={handleSubmit(onSubmit)}>
                        <VStack alignItems="flex-start">
                            <FormLabel>Email address</FormLabel>
                            <Input borderRadius={0} {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                            {errors.email && errors.email.type === "required" && <Text fontSize={15} color="red">This field is required</Text>}
                            {errors.email && errors.email.type === "pattern" && <Text fontSize={15} color="red">Please Enter valid email.</Text>}
                            <FormLabel>Password</FormLabel>
                            <Input type="password" borderRadius={0} {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <Checkbox colorScheme="pink" {...register("rememberMe")} >Remember Me</Checkbox>
                            <Button variant="primary" w="100%" type="submit">Login</Button>
                        </VStack>
                    </form>
                </VStack>
            </GridItem>
        </Grid >
    );
};

export default Login;