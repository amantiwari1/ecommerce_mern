/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { MainSection, ProductSection , BubbleSection} from "../components"


const Home = () => {
    return (
        <div tw="flex flex-col " >

            <MainSection />

            <div tw="bg-indigo-500 py-32  text-center mt-96 md:mt-0  px-5  xl:px-80  2xl:px-96 " >
                <p tw="text-white  text-3xl whitespace-pre-line" >We provide everything you need to make the best boba tea.
                Your home might just become your favorite café! 😉</p>
            </div>

            <ProductSection />
            <BubbleSection />


            <div tw="grid text-black bg-blue-300 py-10" >
            <h1 tw=" text-4xl p-2 md:py-3 font-bold  text-center" >Curated by us, made by you.</h1>
            <div tw="grid p-5 md:grid-cols-3 mx-auto gap-10 " >
                  
            </div>
            </div>





        </div>

    )
}

export default Home;