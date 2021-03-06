/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import { useEffect, useState } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import productActionCreator from "../../actions/productAction";
import cartActionCreator from "../../actions/cartAction";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { SERVER_URL } from '../../models/HostUrl'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';



import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { useHistory, useParams } from "react-router";

const SignleProduct = () => {
  const { productName } = useParams<{ productName: string }>();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const {
    title,
    ImageArray,
    description,
    featureImage,
    _id,
    titleslug,
    price
  } = useAppSelector((state) => state.productReducer.SingleProduct);
  const isLoading = useAppSelector(state => state.productReducer.loading)
  const isAdmin = useAppSelector(
    (state) => state.userReducer.currentUser.isAdmin
  );

  const [ChangeImage, setChangeImage] = useState("");
  const [Quality, setQuality] = useState(1);

  useEffect(() => {
    dispatch(productActionCreator.getProduct(productName));
    setChangeImage(`${SERVER_URL}/images/${featureImage}`);
  }, [dispatch, productName, featureImage]);

  const addCartHandler = () => {
    dispatch(
      cartActionCreator.addCart({
        data: { ProductId: _id, Quality: Quality },
        history: history,
      })
    );
  };

  const onDeleteProduct = (id: string) => {
    dispatch(productActionCreator.deleteProduct({ id: id, history: history }));
  };

  if (isLoading) {
    return (<div tw="flex flex-col justify-center items-center  min-h-screen" >
      <ClimbingBoxLoader size="20" />
      <p tw="font-bold text-2xl" >Loading...</p>

    </div>)
  }

  return (
    <>
      {title ? (
        <div tw="divide-y md:px-10">
          <div tw="grid max-w-7xl mx-auto  md:(grid-cols-2 px-3)   px-6 py-10 gap-4 ">
            <div tw=" row-start-2 md:(row-start-1 row-end-4)">
              <img tw="w-full h-auto" src={ChangeImage} alt="" />

              <div tw="grid grid-cols-5   lg:grid-cols-8 gap-2 mt-2">
                <img
                  onClick={() =>
                    setChangeImage(
                      `${SERVER_URL}/images/${featureImage}`
                    )
                  }
                  tw="w-full cursor-pointer h-auto"
                  src={`${SERVER_URL}/images/${featureImage}`}
                  alt=""
                />
                {ImageArray.map((x: any, i: any) => (
                  <img
                    key={i}
                    onClick={() =>
                      setChangeImage(`${SERVER_URL}/images/${x}`)
                    }
                    tw="w-full cursor-pointer h-auto"
                    src={`${SERVER_URL}/images/${x}`}
                    alt=""
                  />
                ))}
              </div>
            </div>

            <div tw=" ">
              <h1 tw=" text-3xl md:text-5xl font-bold ">{title}</h1>
              <p tw=" text-xl md:text-3xl mt-2">${price}</p>
              {isAdmin && (
                <div tw="flex mt-4 space-x-3.5 justify-start">
                  <Link to={`/editProduct?edit=true&id=${titleslug}`}>
                    {" "}
                    Edit this Product{" "}
                  </Link>

                  <button onClick={() => onDeleteProduct(_id)}>Delete</button>
                </div>
              )}
            </div>

            <div tw="   ">
              <div tw=" flex my-5 justify-center md:justify-start items-center space-x-3">
                <label>Quantity</label>

                <BsPlusCircle
                  onClick={() => setQuality(Quality + 1)}
                  tw="cursor-pointer"
                />
                <p>{Quality}</p>
                <AiOutlineMinusCircle
                  onClick={() => setQuality(Quality - 1)}
                  tw="cursor-pointer"
                />
              </div>
              <button
                onClick={addCartHandler}
                tw="py-4 mt-8  w-full text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md">
                Add to Cart
              </button>
              <button tw="py-4  my-8 w-full text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md">
                Buy It Now
              </button>

              <div tw="prose dark:(prose-dark)">
                {ReactHtmlParser(description)}
              </div>
            </div>
          </div>

          <div>
            <h1 tw="capitalize text-3xl font-bold text-center pt-14">
              You may also like...{" "}
            </h1>
            <div tw="grid py-10 px-10  lg:grid-cols-4  md:(grid-cols-3 px-16) xl:(px-40) gap-8 justify-center">
              {/* <ProductCard />
            <ProductCard /> 
            <ProductCard />
            <ProductCard />  */}
            </div>
          </div>
        </div>
      ) : (
        <p tw="flex justify-center items-center text-5xl font-bold min-h-screen">
          Not found 404{" "}
        </p>
      )}
    </>
  );
};

export default SignleProduct;
