import { Button, Checkbox, FormLabel, Grid, GridItem, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface LoginProps {
}
interface LoginForm {
    email: string,
    password: string,
    rememberMe?: boolean
}

const Login: React.FC<LoginProps> = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const onSubmit: SubmitHandler<LoginForm> = data => console.log(data);
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