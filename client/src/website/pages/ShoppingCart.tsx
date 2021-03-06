/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import ProductCart from "../components/ProductCart/ProductCart";
import CartActionCreator from "../../actions/cartAction";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import orderActionCreator from "../../actions/orderAction";
import cartActionCreator from "../../actions/cartAction";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { data, fullTotal } = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(CartActionCreator.getCarts());
  }, [dispatch]);

  const onOrderHandler = () => {

    const SaveOrder = data.map((cart) => {
      return { title: cart.title, quantity: cart.quality, price: cart.price, total: cart.total }
    })


    dispatch(
      orderActionCreator.orderCart({ cart: { cart: SaveOrder, total: fullTotal } })
    )
    dispatch(cartActionCreator.removeAllCart())
  };

  return (
    <div tw="px-8 py-24">
      <div tw=" max-w-5xl  mx-auto my-0 space-y-10 ">
        <h1 tw=" text-center mb-20 text-5xl font-bold ">Your Shopping Cart</h1>
      </div>

      {

        data.length !== 0 ? <div tw="max-w-7xl  mx-auto my-0  divide-y">
          <div tw=" hidden md:grid grid-cols-6 py-10">
            <p tw="col-span-3">Product</p>
            <p>Price</p>
            <p>Quality</p>
            <p tw="text-right">Total</p>
          </div>
          {data.map((cart) => (
            <ProductCart
              title={cart.title}
              price={cart.price}
              quality={cart.quality}
              featureImage={cart.featureImage}
              id={cart.id}
              total={cart.total}
            />
          ))}
          <div tw="flex flex-col items-end">
            <p tw="font-bold py-5">Total Price: ${fullTotal}</p>
            <button
              onClick={onOrderHandler}
              tw="py-4   w-36 text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md">
              CHECKOUT
  </button>
          </div>
        </div> : 
        <div tw="text-center" >
          <p>No Shopping Cart</p>
        </div>

      }

    </div>
  );
};

export default ShoppingCart;
