/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useParams } from 'react-router'
import { ProductCard } from '../components'

const ListofProduct = () => {

    let { CollectName }= useParams<{ CollectName: string }>() 
    return ( <>
            <h1 tw="capitalize text-5xl font-bold text-center py-14">{CollectName.replaceAll("-", " ")}</h1>
        <div tw="grid py-10 px-10  lg:grid-cols-4 xl:() md:(grid-cols-3) gap-8 justify-center">
            <ProductCard />
            <ProductCard /> 
            <ProductCard />
            <ProductCard /> 
            
        </div>
        </>
    )
}

export default ListofProduct
