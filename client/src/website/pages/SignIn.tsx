/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { VscError } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'

const Input = tw.input`w-full rounded-3xl focus:(ring-4  outline-none) text-black px-4 py-3`




type Inputs = {
    email: string,
    password: string,
};

const SignIn = () => {

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
      };

    

    const { register, formState: {errors}, handleSubmit  } = useForm<Inputs>()
    return (
        <div tw="flex  min-h-full h-90v justify-center items-center m-0" >

            <div tw="max-w-md mx-1 w-full bg-lightnav text-white overflow-hidden rounded-lg shadow-2xl  dark:(bg-darknav) px-10" >

                <form tw="max-w-full w-80 mx-auto py-8" onSubmit={handleSubmit(onSubmit)} >

                    
 
                    <div tw=" mb-3 pb-5 relative" >
                        <label tw="inline-block mb-1 ml-2" >Email</label>

                        <Input placeholder="Enter the Email Address" css={[errors.email ? tw`ring ring-red-400  mb-0 ` : tw`ring-blue-400 mb-7`]} {...register("email", {
                            required: 'You must provide the email address!',
                            pattern: {
                                // eslint-disable-next-line
                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Invalid email address',
                            },
                        })}  />

                        

                        {
                            errors.email && <> <VscError tw="absolute h-6 w-6 top-10 right-2 text-red-500" /> <p tw="ml-2 text-red-500 mt-1 " >{errors.email.message}</p> </>
                        }

                    </div>
                    <div tw=" mb-3 pb-5 relative" >
                        <label tw="inline-block mb-1 ml-2" >Password</label>

                        <Input placeholder="Enter the password" css={[errors.password ? tw`ring ring-red-400   mb-0 ` : tw`ring-blue-400 mb-7`]} type="password" {...register("password", {
                            required: 'You must provide a password.',
                            minLength: {
                                value: 6,
                                message: 'Your password must be greater than 6 ', 
                            }
                        })} />

                        
                        {
                            errors.password && <> <VscError tw="absolute h-6 w-6 top-10 right-2 text-red-500" /> <p tw="ml-2 text-red-400 mt-1 " >{errors.password.message}</p> </>
                        }

                    </div>
                    <div tw=" flex mb-3 pb-5 justify-center " >
                        <button type="submit"  tw="py-3  focus:outline-none w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-full " >Sign In</button>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default SignIn
