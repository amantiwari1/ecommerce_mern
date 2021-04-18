/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { useHistory } from 'react-router-dom'
import tw from 'twin.macro'
import cartActionCreator from '../../../actions/cartAction'
import { useAppDispatch } from '../../../shared/reduxHooks'
import ProductCartInterface from './ProductInterface'

const ProductCart = ( {id, quality, title, featureImage, price, total} : ProductCartInterface )  => {

    

    const dispatch = useAppDispatch()
    const history = useHistory()
    const onQualityHandler = (value: number) => {
        dispatch(cartActionCreator.updateCart({id: id, value: value, history: history}))
        dispatch(cartActionCreator.addCart({data: {ProductId: id, Quality: value}, history: history   }))
    } 

    const onCartRemover = (id: string) => {
        dispatch(cartActionCreator.removeCart(id))
    } 

    return (
        <div tw="grid  grid-cols-4 gap-5 md:(grid-cols-6 gap-2) py-5 md:items-center ">
            <div tw=" flex col-span-4 md:col-span-3 space-x-7" >
                <img tw="h-24 w-24  " src={`http://localhost:3001/images/${featureImage}`} alt="" />
                <div >
                    <p>{title}</p> 
                    
                    <button onClick={() => onCartRemover(id as string)}>Remove</button> 
                </div> 
            </div>

            <div tw="flex col-span-4  justify-end md:(col-span-1 justify-start) space-x-2" >
                <p tw=" md:hidden ">Price :</p>
                <p tw=" " >${price}</p>
            </div>


            <p tw="flex col-span-2 justify-center md:justify-start md:col-span-1 space-x-2" >
                <div tw="flex space-x-2" >
                    <button onClick={() => {
                        
                        onQualityHandler(1)
                        
                        
                        }}  tw="font-bold border px-2" >+</button>
 
                    <p>{quality}</p>
 
                    <button onClick={() => {
                        
                        if(quality > 1){ 
                            onQualityHandler(-1)
                        }
                    
                    }}  tw="font-bold border px-3" >-</button> 
                </div>

            </p>
            <div tw="flex  font-bold md:justify-end  space-x-2" >
                <p tw="md:hidden" >Total</p>
                <p tw="  col-span-2 md:col-span-1">${total}</p>
            </div>
        </div>
    )
}

export default ProductCart