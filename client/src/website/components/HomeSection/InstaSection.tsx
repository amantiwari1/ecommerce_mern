import InstaCard from "../InstaCard/InstaCard";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";

const InstaSection = () => {
  return (
    <div tw="grid py-10 px-4">
      <div>
        <h1 tw=" text-4xl  md:pt-3 font-bold  text-center">
          Tag us @drinksammee
        </h1>
      </div>
      <div tw=" flex flex-nowrap overflow-x-auto space-x-4 md:(grid grid-cols-3 gap-4 space-x-0) lg:(grid-cols-4) mt-10 ">
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
        <InstaCard />
      </div>
    </div>
  );
};

export default InstaSection;
