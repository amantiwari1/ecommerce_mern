/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'

const SubscribeSection = () => {
    return (

        <div tw="flex flex-col  py-20 mx-auto space-y-10 text-center   px-5  xl:px-80  2xl:px-96 " >
            <h1 tw="text-3xl font-bold" >Keep in touch</h1>
            <p tw="text-3xl text-center" >Sign-up and be the first to know when it comes to exclusive offers and new products!</p>

            <form tw="flex flex-col md:flex-row items-center  mx-auto" >
                <input placeholder="your@email.com" tw="text-black   text-center h-14 w-80 rounded-md  focus:outline-none mb-3 md:(mr-3 mb-0)" />
                <button tw="py-4   w-40 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" >SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default SubscribeSection
