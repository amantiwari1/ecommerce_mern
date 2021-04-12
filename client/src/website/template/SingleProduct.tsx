/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useEffect, useState } from 'react'
import { ProductCard } from '../components'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'
import productActionCreator from '../../actions/productAction'
import ReactHtmlParser from 'react-html-parser';  
 

import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks'
import { useParams } from 'react-router'





const SignleProduct = () => {


    const { productName } = useParams<{ productName: string }>()
    const dispatch = useAppDispatch()
    const { title, ImageArray, description, featureImage } = useAppSelector((state) => state.productReducer.SingleProduct)

    const [ChangeImage, setChangeImage] = useState("")

    useEffect(() => {
        dispatch(productActionCreator.getProduct(productName))
        setChangeImage(featureImage)
    }, [dispatch, productName, featureImage])

    console.log(title );
    console.log(title !== "");
    





    return (
        <>

            { title ? (<div tw="divide-y md:px-10" >

                <div tw="grid max-w-7xl mx-auto  md:(grid-cols-2 px-3)   px-6 py-10 gap-4 " >


                    <div tw=" row-start-2 md:(row-start-1 row-end-4)" >
                        <img tw="w-full h-auto" src={ChangeImage} alt="" />

                        <div tw="grid grid-cols-5   lg:grid-cols-8 gap-2 mt-2" >
                            <img tw="w-full h-auto" src="http://via.placeholder.com/400x400" alt="" />

                            {
                                ImageArray.map((x, i) => (
                                    <img key={i} onClick={() => setChangeImage(x)} tw="w-full cursor-pointer h-auto" src={x} alt="" />

                                ))
                            }

                        </div>
                    </div>

                    <div tw=" ">
                        <h1 tw=" text-3xl md:text-5xl font-bold " >{title}</h1>
                        <p tw=" text-xl md:text-3xl " >$25.00</p>
                    </div>

                    <div tw="   ">
                        <div tw=" flex my-5 justify-center md:justify-start items-center space-x-3"  >
                            <label>Quantity</label>

                            <BsPlusCircle tw="cursor-pointer" />
                            <p >5</p>
                            <AiOutlineMinusCircle tw="cursor-pointer" />
                        </div>
                        <button tw="py-4 mt-8  w-full text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" >Add to Cart</button>
                        <button tw="py-4  my-8 w-full text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" >Buy It Now</button>

                        <div tw="prose dark:(prose-dark)" >{ReactHtmlParser(description)}</div>

                    </div>

                </div>

                <div>
                    <h1 tw="capitalize text-3xl font-bold text-center pt-14">You may also like... </h1>
                    <div tw="grid py-10 px-10  lg:grid-cols-4  md:(grid-cols-3 px-16) xl:(px-40) gap-8 justify-center">
                        {/* <ProductCard />
            <ProductCard /> 
            <ProductCard />
            <ProductCard />  */}

                    </div>
                </div>
            </div>)
                : <p tw="flex justify-center items-center text-5xl font-bold min-h-screen" >Not found 404 </p>

            }
        </>)
}

export default SignleProduct