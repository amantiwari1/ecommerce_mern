/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {Link} from "react-router-dom";

const BubbleSection = () => {
  return (
    <div tw="flex flex-col-reverse  md:flex-row mx-auto h-full p-10 md:p-20 ">
      <div tw="flex  flex-1  flex-col   justify-center space-y-5 xl:(ml-32) lg:(ml-20 ) md:(ml-10 mr-5 ) font-serif">
        <h1 tw="text-4xl  md:text-4xl lg:text-6xl font-extrabold">
          Bubbles are meant to be chewed, not burst.
        </h1>
        <p tw="leading-relaxed text-lg font-extralight whitespace-pre-line ">
          Made from the starch of the cassava root, boba is a delicious addition
          to any drink.
        </p>
        <div tw="pt-4">
          <Link
            tw="py-4  px-8 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md"
            to="/products/boba">
            Shop BOBA
          </Link>
        </div>
      </div>

      <div tw="flex-1">
        <img
          tw=" pb-10"
          src="https://cdn.shopify.com/s/files/1/0264/3066/8855/files/CEADBCAC-082C-4794-A715-AFFF9347898F-7557041A-39A9-43AA-877D-6608767E95A3_1_608x896.JPG"
          alt=""
        />
      </div>
    </div>
  );
};

export default BubbleSection;
