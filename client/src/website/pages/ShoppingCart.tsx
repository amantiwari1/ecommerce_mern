/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import ProductCart from '../components/ProductCart/ProductCart'

const ShoppingCart = () => {
    return (
        <div tw="px-8 py-24" > 
            <div tw=" max-w-5xl  mx-auto my-0 space-y-10 " >
                <h1 tw=" text-center mb-20 text-5xl font-bold " >Your Shopping Cart</h1>
            </div>

            <div tw="max-w-7xl  mx-auto my-0  divide-y" >
                <div tw=" hidden md:grid grid-cols-6 py-10">
                    <p tw="col-span-3" >Product</p>
                    <p>Price</p>
                    <p>Quality</p>
                    <p tw="text-right" >Total</p>
                </div>
             <ProductCart />
             <ProductCart />
             <ProductCart />
             <ProductCart />
             <div tw="flex flex-col items-end" >
                <p tw="font-bold py-5" >Total Price:  $500</p>
                <button tw="py-4   w-36 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" >CHECKOUT</button>
             </div>
            </div>

        </div>
    )
}

export default ShoppingCart
