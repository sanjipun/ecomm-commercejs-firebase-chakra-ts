import { Button, Checkbox, FormLabel, Grid, GridItem, Text, VStack, Input, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { PostRegisterRequest, ResetError, ResetSuccess } from '../AuthRedux/AuthAction';
import { RegisterForm } from '../AuthRedux/AuthConstants';


interface RegisterProps { }

const Register: React.FC<RegisterProps> = () => {
    const history = useHistory();
    const toast = useToast();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>();
    const onSubmit: SubmitHandler<RegisterForm> = data => {
        if (watch("password") !== watch("confirmPassword")) {
            toast({
                title: "Your Password do not match",
                description: "Please check your password and try again later.",
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            })
        } else {
            dispatch(PostRegisterRequest(data))
        }
    };
    const Auth = useSelector((state: RootStateOrAny) => state.Register)
    useEffect(() => {
        if (Auth.RegisterError) {
            toast({
                title: "Registration Failed.",
                description: Auth.RegisterError,
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
                onCloseComplete: () => dispatch(ResetError())
            })
        } else if (!Auth.error && Auth.RegisterSuccess) {
            history.push("/auth/login")
            toast({
                title: "Registration Success.",
                description: "asdasd",
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
                onCloseComplete: () => dispatch(ResetSuccess())
            })
        }
    }, [dispatch, Auth, toast, history])

    return (
        <Grid m="100px 50px" templateColumns="repeat(1,1fr)" >
            <GridItem colSpan={1}>
                <Text fontSize={24}>
                    Hello there!
                </Text>
                <Text>
                    Please <Link to="/auth/login" style={{ color: "dodgerblue" }}>sign in</Link>  or create an account to continue.
                </Text>
                <VStack mt={30} alignItems="flex-start">
                    <Text>CREATE AN ACCOUNT</Text>
                    <form style={{ width: 400 }} onSubmit={handleSubmit(onSubmit)}>
                        <VStack alignItems="flex-start">
                            <FormLabel>First Name</FormLabel>
                            <Input borderRadius={0} {...register("firstName", { required: true })} />
                            {errors.firstName && <Text fontSize={15} color="red">This field is required</Text>}
                            <FormLabel>Last Name</FormLabel>
                            <Input borderRadius={0} {...register("lastName", { required: true })} />
                            {errors.lastName && <Text fontSize={15} color="red">This field is required</Text>}
                            <FormLabel>Email address</FormLabel>
                            <Input borderRadius={0} {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                            {errors.email && errors.email.type === "required" && <Text fontSize={15} color="red">This field is required</Text>}
                            {errors.email && errors.email.type === "pattern" && <Text fontSize={15} color="red">Please Enter valid email.</Text>}
                            <FormLabel>Password</FormLabel>
                            <Input type="password" borderRadius={0} {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.:;<=>?\\@[\]^_`{|}~]).{6,64}$/ })} />
                            {errors.password && errors.password.type === "required" && <Text fontSize={15} color="red">This field is required</Text>}
                            {errors.password && errors.password.type === "pattern" && <Text fontSize={15} color="red">Your password must inclue atleast 1 uppercase, 1 lowercase, 1 symbol and 1 number .</Text>}
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" borderRadius={0} {...register("confirmPassword", { required: true })} />
                            {errors.confirmPassword && <span>This field is required</span>}
                            {watch("password") !== watch("confirmPassword") && <Text fontSize={15} color="red">Passwords do not match</Text>}
                            <Checkbox colorScheme="pink" {...register("newsletter")}>I want to receive Safari newsletters with the best deals and offers</Checkbox>
                            <Button variant="primary" w="100%" type="submit">Register</Button>
                        </VStack>
                    </form>
                </VStack>
            </GridItem>
        </Grid >
    );
};


export default Register;