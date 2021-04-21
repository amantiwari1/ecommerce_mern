/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { OrderCardInterface, OrderNameInterface } from './OrderCardInterface'

const OrderName = ({ title, price, total, quantity }: OrderNameInterface) => {
    return (
        <div tw="flex flex-wrap space-x-2 border-b-2 dark:(border-gray-500) " >
            <p tw="font-bold" >{title}</p>


            <div tw="flex space-x-2" > 
            <p> Price : ${price}</p>
            <p> quantity :  {quantity}</p>
            <p > Total Price : ${total}</p>
            </div>
        </div>
    )
}

const OrderCard = ({ cart, total,  _id }: OrderCardInterface) => {
    return (
        <div tw="border border-black dark:(border-white) my-3 shadow-md rounded-md p-4" >


            <div tw="my-2 border-b-2 border-gray-800 dark:(border-white)" >
                <p>Order id: # {_id}</p>
            </div>
            <div tw="space-y-2 " > 

                {
                    cart.map(cart => (
                        (
                            <OrderName
                                {...cart}
                            />
                        )
                    ))
                }
            </div>

            <div tw="text-right" >
                <p tw="font-semibold" >Total: ${total}</p>
            </div>
        </div>
    )
}

export default OrderCard
