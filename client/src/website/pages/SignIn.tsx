/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'
import { Input, FormWrapper } from "../components"
import {Link} from 'react-router-dom'






type Inputs = {
    email: string,
    password: string,
};

const SignIn = () => {

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };



    const { register, formState: { errors }, handleSubmit } = useForm<Inputs>()
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} >

            <div tw=" flex mb-3 pb-5 justify-center " >
                <h1 tw="font-bold text-2xl md:text-3xl" >Welcome to Sammee</h1>
            </div>

            <Input 
            isError={errors.email} 
            label="Email" 
            placeholder="Enter your email"
            register={register("email", {
                required: 'You must provide the email address!',
                pattern: {
                    // eslint-disable-next-line
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Invalid email address',
                },
            })} />

            <Input 
            type="password" 
            isError={errors.password} 
            label="Password"
            placeholder="Enter your Password"
            register={register("password", {
                required: 'You must provide a password.',
                minLength: {
                    value: 6,
                    message: 'Your password must be greater than 6 ',
                }
            })} />


            <div tw=" flex mb-3 pb-5 justify-center " >
                <button type="submit" tw="py-3  focus:outline-none w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-full " >Sign In</button>
            </div>
           
            <div tw=" flex mb-3 pb-5 justify-center " >
                <p>
                    Don't have account? 
                <Link to="/signup" tw="ml-1  focus:outline-none   text-center text-indigo-600 hover:text-indigo-500 rounded-full " >Create account</Link>
                </p>
            </div>



        </ FormWrapper >
    )
}

export default SignIn
