/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import {CustomerCard} from "../../components"

const CustomerSection = () => {
    return (
        <div>
            <div tw="grid text-black bg-blue-300 py-10" >
                <div >
                    <h1 tw=" text-4xl  md:pt-3 font-bold  text-center" >What our customers</h1>
                    <h1 tw=" text-4xl  md:pb-3 font-bold  text-center" > are saying...</h1>
                </div>
                <div tw="grid p-5 md:grid-cols-2 mx-auto gap-10 " >
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                </div>
            </div>
        </div>
    )
}

export default CustomerSection
