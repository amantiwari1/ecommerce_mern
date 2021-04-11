/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import ProductCardInterface from './ProductCardInterface'

const ProductCard = ( { title, price, img }: ProductCardInterface )  => {
    return (
        <div tw="space-y-3 ">
            <img tw="w-full h-auto" src={img} alt="" /> 

            <p tw="text-center text-3xl font-bold" >{title}</p>

            <p tw="text-center text-2xl " >from ${price}</p>
            
        </div>
    )
}

export default ProductCard
