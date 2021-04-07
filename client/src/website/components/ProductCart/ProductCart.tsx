/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'

const ProductCart = () => {
    return (
        <div tw="grid  grid-cols-4 gap-5 md:(grid-cols-6 gap-2) py-5 md:items-center ">
            <div tw=" flex col-span-4 md:col-span-3 space-x-7" >
                <img tw="h-24 w-24  " src="https://cdn.shopify.com/s/files/1/0264/3066/8855/products/SAMMEE-Yogurt-Kit_768x768.jpg" alt="" />
                <div >
                    <p>Yogurt Smoothie Boba Kit</p>
                    <p>6 Plastic Boba Straws</p>
                    <button>Remove</button>
                </div>
            </div>

            <div tw="flex col-span-4  justify-end md:(col-span-1 justify-start) space-x-2" >
                <p tw=" md:hidden ">Price :</p>
                <p tw=" " >$25.00</p>
            </div>


            <p tw="flex col-span-2 justify-center md:justify-start md:col-span-1 space-x-2" >
                <div tw="flex space-x-2" >
                    <button tw="font-bold border px-2" >+</button>

                    <p >5</p>

                    <button tw="font-bold border px-3" >-</button>
                </div>

            </p>
            <div tw="flex  font-bold md:justify-end  space-x-2" >
                <p tw="md:hidden" >Total</p>
                <p tw="  col-span-2 md:col-span-1">$125.00</p>
            </div>
        </div>
    )
}

export default ProductCart
