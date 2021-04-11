/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useParams } from 'react-router'
import { ProductCard } from '../components'
import { useEffect } from 'react'
import productActionCreator from '../../actions/productAction'
import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks'


const ListofProduct = () => {

    let { CollectName } = useParams<{ CollectName: string }>()
    const AllProduct = useAppSelector((state) => state.productReducer)
  const dispatch = useAppDispatch()
    

    useEffect(() => {
        dispatch(productActionCreator.getProducts())
    }, [dispatch])


    return (<>
        <h1 tw="capitalize text-5xl font-bold text-center py-14">{CollectName.replaceAll("-", " ")}</h1>
        <div tw="grid py-10 px-10  lg:grid-cols-4  md:(grid-cols-3) gap-8 justify-center">
        
        {
            AllProduct.data.map(product => (
                <ProductCard  price={product.price} title={product.title} img={product.featureImage} />
            ))
        }

        </div>
    </>
    )
}

export default ListofProduct
