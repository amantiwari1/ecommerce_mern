/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import ProductCardInterface from './ProductCardInterface'
import {Link} from 'react-router-dom'

const ProductCard = ( { to, title, price, img }: ProductCardInterface )  => {
    return (
        <Link to={to} tw="space-y-3 ">
            <img tw="w-full h-auto" src={`http://localhost:3001/images/${img}`} alt="" /> 

            <p tw="text-center text-3xl font-bold" >{title}</p>

            <p tw="text-center text-2xl " >from ${price}</p>
            
        </Link>
    )
}

export default ProductCard
