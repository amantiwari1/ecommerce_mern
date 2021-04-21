/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useEffect } from 'react'
import orderActionCreator from '../../actions/orderAction'
import { useAppDispatch, useAppSelector } from '../../shared/reduxHooks';
import OrderCard from '../components/OrderCard/OrderCard';

const Order = () => {

    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.orderReducer.data)

    useEffect(() => {
        dispatch(orderActionCreator.getOrderData())
    }, [dispatch])


    return (
        <div tw="mx-auto max-w-xl p-2" >


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
