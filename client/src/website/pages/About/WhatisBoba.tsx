/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import SammeeImage from "../../../assets/images/Sammee3.jpg";

const WhatisBoba = () => {
  return (
    <div tw=" max-w-5xl px-8 py-24 mx-auto my-0 space-y-10 ">
      <h1 tw=" text-center mb-20 text-5xl font-bold ">What is Boba?</h1>

      <p tw="text-3xl">
        Boba is made from the starch of the cassava root and serves as a fun and
        enjoyable addition to any beverage. The round and chewy treat can
        usually be found at the bottom of boba/bubble teas and are consumed
        through a wide straw. They are also commonly known as tapioca pearls,
        bubbles or black pearls.{" "}
      </p>
      <p tw="text-3xl">
        Bubble Tea is a Taiwanese drink that was created in the 1980s. Most
        recipes simply contain a type of tea, milk, and sugar. Boba is a popular
        topping that pairs harmoniously with bubble tea drinks.{" "}
      </p>

      <img tw="w-full h-auto" src={SammeeImage} alt="" />
    </div>
  );
};

export default WhatisBoba;
