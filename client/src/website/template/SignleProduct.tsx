/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useState } from 'react'
import { ProductCard } from '../components'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {BsPlusCircle} from 'react-icons/bs'

 
const SignleProduct = () => {

    const [ChangeImage, setChangeImage] = useState("http://via.placeholder.com/400x400")

    const ListOfImage = [
        "http://via.placeholder.com/400x391",
        "http://via.placeholder.com/400x392",
        "http://via.placeholder.com/400x393",
        "http://via.placeholder.com/400x394",
        "http://via.placeholder.com/400x395",
        "http://via.placeholder.com/400x396",
        "http://via.placeholder.com/400x397",
        "http://via.placeholder.com/400x398",
        "http://via.placeholder.com/400x399",
        "http://via.placeholder.com/400x391",
    ]
    return (


        <div tw="divide-y md:px-10" >

            <div tw="grid max-w-7xl mx-auto  md:(grid-cols-2 px-3)   px-6 py-10 gap-4 " >


                <div tw=" row-start-2 md:(row-start-1 row-end-4)" >
                    <img tw="w-full h-auto" src={ChangeImage} alt="" />

                    <div tw="grid grid-cols-5   lg:grid-cols-8 gap-2 mt-2" >
                        <img tw="w-full h-auto" src="http://via.placeholder.com/400x400" alt="" />

                        {
                            ListOfImage.map((x, i) => (
                                <img key={i} onClick={() => setChangeImage(x)} tw="w-full cursor-pointer h-auto" src={x} alt="" />

                            ))
                        }

                    </div>
                </div>

                <div tw=" ">
                    <h1 tw=" text-3xl md:text-5xl font-bold " >Milk Tea Powder Boba Kit</h1>
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
                    <p><strong>Boba</strong>&nbsp;is a chewy, ball-shaped treat that can usually be found at the bottom of bubble teas and are typically consumed through a wide straw. They are also commonly known as bubbles, black pearls, or tapioca balls. Boba is made from the starch of the cassava root and serves as a fun and deliciously sweet addition to any beverage.&nbsp;</p>
                    <ul>
                        <li>12 oz. bag of Boba</li>
                        <li>Packaged inside vacuum-sealed bags to ensure freshness</li>
                        <li>Makes approximately 10-12 servings of Boba</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p><strong>BOBA DISCLAIMER</strong>:</p>
                    <p>Store any leftover uncooked boba in a sealed and airtight container in a cool/dry area. Do NOT store in the fridge. Do NOT eat silica gel packets.</p>
                    <p>Once opened, uncooked boba will last approximately 1 week.&nbsp;Once cooked, boba will only be good for about 6 hours. Do not refrigerate.</p>
                    <p><strong>Boba</strong>&nbsp;is a chewy, ball-shaped treat that can usually be found at the bottom of bubble teas and are typically consumed through a wide straw. They are also commonly known as bubbles, black pearls, or tapioca balls. Boba is made from the starch of the cassava root and serves as a fun and deliciously sweet addition to any beverage.&nbsp;</p>
                    <ul>
                        <li>12 oz. bag of Boba</li>
                        <li>Packaged inside vacuum-sealed bags to ensure freshness</li>
                        <li>Makes approximately 10-12 servings of Boba</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p><strong>BOBA DISCLAIMER</strong>:</p>
                    <p>Store any leftover uncooked boba in a sealed and airtight container in a cool/dry area. Do NOT store in the fridge. Do NOT eat silica gel packets.</p>
                    <p>Once opened, uncooked boba will last approximately 1 week.&nbsp;Once cooked, boba will only be good for about 6 hours. Do not refrigerate.</p>
                    <p><strong>Boba</strong>&nbsp;is a chewy, ball-shaped treat that can usually be found at the bottom of bubble teas and are typically consumed through a wide straw. They are also commonly known as bubbles, black pearls, or tapioca balls. Boba is made from the starch of the cassava root and serves as a fun and deliciously sweet addition to any beverage.&nbsp;</p>
                    <ul>
                        <li>12 oz. bag of Boba</li>
                        <li>Packaged inside vacuum-sealed bags to ensure freshness</li>
                        <li>Makes approximately 10-12 servings of Boba</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p><strong>BOBA DISCLAIMER</strong>:</p>
                    <p>Store any leftover uncooked boba in a sealed and airtight container in a cool/dry area. Do NOT store in the fridge. Do NOT eat silica gel packets.</p>
                    <p>Once opened, uncooked boba will last approximately 1 week.&nbsp;Once cooked, boba will only be good for about 6 hours. Do not refrigerate.</p>



                </div>

            </div>

            <div>
            <h1 tw="capitalize text-3xl font-bold text-center pt-14">You may also like... </h1>
        <div tw="grid py-10 px-10  lg:grid-cols-4  md:(grid-cols-3 px-16) xl:(px-40) gap-8 justify-center">
            <ProductCard />
            <ProductCard /> 
            <ProductCard />
            <ProductCard /> 
            
        </div>
            </div>
        </div>
    )
}

export default SignleProduct
