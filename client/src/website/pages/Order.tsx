/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useEffect } from 'react'
import orderActionCreator from '../../actions/orderAction'
import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks';
import OrderCard from '../components/OrderCard/OrderCard';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

const Order = () => {

    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.orderReducer.data)

    useEffect(() => {
        dispatch(orderActionCreator.getOrderData())
    }, [dispatch])


    if (orders.length === 0) {
        return (
            <div tw="flex flex-col justify-center items-center  min-h-screen" >
                <ClimbingBoxLoader size="20" />
                <p tw="font-bold text-2xl" >Loading...</p>

            </div>
        )
    }


    return (
        <div tw="mx-auto max-w-xl p-2 min-h-screen" >


            <h1 tw="text-center font-bold text-4xl" >Order</h1>
            {
                orders.map(order => (
                    <div>
                        <OrderCard _id={order._id} {...order} />
                    </div>
                ))
            }
        </div>
    )
}

export default Order
