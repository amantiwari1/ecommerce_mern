/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";

const ProductSection = () => {
  return (
    <div tw="grid text-black bg-blue-300 py-10">
      <h1 tw=" text-4xl p-2 md:py-3 font-bold  text-center">
        Curated by us, made by you.
      </h1>
      <div tw="grid p-5 md:grid-cols-3 mx-auto gap-10 ">
        {/* <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
      </div>
    </div>
  );
};

export default ProductSection;
