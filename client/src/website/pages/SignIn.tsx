/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import {VscError} from 'react-icons/vsc'
import {IoCheckmarkDoneCircleSharp} from 'react-icons/io5'

const SignIn = () => {
    return (
        <div tw="flex  min-h-screen justify-center items-center" >

            <form tw="max-w-screen-md m-5 w-full bg-gray-200 dark:(bg-gray-700) px-10" >
                 <div tw="flex flex-col" >

                     <div tw="flex space-x-2 " >
                         <label>Email</label>
                         <input />
                         <VscError />
                         <IoCheckmarkDoneCircleSharp />
                     </div>
                         <p>Error message</p>

                 </div>
            </form>
            
        </div>
    )
}

export default SignIn
