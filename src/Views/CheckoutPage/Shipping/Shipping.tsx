import { Button, Checkbox, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ShippingProps { }

interface ShippingForm {
    email: string,
    fullName: string,
    address: string,
    state: string,
    city: string,
    phoneNumber: string,
    defaultShippingAddress: string,
}
const Shipping: React.FC<ShippingProps> = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ShippingForm>();
    const onSubmit: SubmitHandler<ShippingForm> = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack alignItems="flex-start">
                <FormLabel>Email address</FormLabel>
                <Input borderRadius={0} {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                {errors.email && errors.email.type === "required" && <Text fontSize={15} color="red">This field is required</Text>}
                {errors.email && errors.email.type === "pattern" && <Text fontSize={15} color="red">Please Enter valid email.</Text>}
                <FormLabel>Full Name</FormLabel>
                <Input borderRadius={0} {...register("fullName", { required: true })} />
                {errors.fullName && <span>This field is required</span>}
                <FormLabel>Address</FormLabel>
                <Input borderRadius={0} {...register("address", { required: true })} />
                {errors.address && <span>This field is required</span>}
                <FormLabel>State</FormLabel>
                <Input borderRadius={0} {...register("state", { required: true })} />
                {errors.state && <span>This field is required</span>}
                <FormLabel>City</FormLabel>
                <Input borderRadius={0} {...register("city", { required: true })} />
                {errors.city && <span>This field is required</span>}
                <FormLabel>Phone Number</FormLabel>
                <Input type="number" borderRadius={0} {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber && <span>This field is required</span>}
                <Checkbox colorScheme="pink" {...register("defaultShippingAddress")}>Set Default Shipping Address</Checkbox>
                <Button variant="primary" p={0} w="100%" type="submit">Save</Button>
            </VStack>
        </form>
    );
};

export default Shipping;