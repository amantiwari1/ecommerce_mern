/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {Link} from "react-router-dom";
import backgroudImages from "../../../assets/images/Sammee1.webp";

const MainSection = () => {
  return (
    <div
      tw="h-96 w-full  bg-right-top md:(h-screen bg-center)  bg-cover  pt-36 md:pt-40 lg:pt-60 px-0 "
      style={{backgroundImage: `url('${backgroudImages}')`}}>
      <div tw="flex flex-wrap items-center xs:flex-col-reverse md:flex-row  md:mt-6">
        <div tw="flex flex-1 md:text-black  flex-grow  max-w-full xl:(ml-32) lg:(ml-20 mt-20) md:(ml-10 mr-5 mt-20)  ">
          <div tw="pt-0 pb-16  max-w-xl space-y-5 p-10  md:p-0 font-serif">
            <h1 tw="text-4xl  md:text-4xl lg:text-6xl font-extrabold">
              It’s like a café in a box.
            </h1>
            <p tw="leading-relaxed text-lg font-extralight whitespace-pre-line ">
              Open up to a fully curated experience with everything you need to
              make your favorite drinks.
            </p>
            <div tw="pt-4">
              <Link
                tw="py-4  px-8 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md"
                to="/collections/all">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div tw="flex flex-1 justify-center flex-grow mb-4 max-w-full px-4">
          <div tw="h-60"></div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
