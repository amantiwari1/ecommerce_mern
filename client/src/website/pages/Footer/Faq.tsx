/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";

const Faq = () => {
  const FaqData = [
    {
      question: "HOW HAS SAMMEE RESPONDED TO COVID-19? ",
      answer:
        "SAMMEE products are produced in an FDA registered facility, following strict food manufacturing quality standards to protect products from contamination of any kind. Our fulfillment specialists are required to wear protective gear while building your orders. SAMMEE ships all of its packages to you via USPS. USPS has put policies into place to limit direct contact between drivers, packages, and recipients for your safety.",
    },
    {
      question: "WHAT IS BOBA?",
      answer:
        "Boba is a chewy, ball-shaped treat that can usually be found at the bottom of cold/iced teas and is typically consumed through a wide straw. It is also known as bubbles, black pearls, or tapioca balls. Boba is made from the starch of the cassava root.",
    },
    {
      question: "WHAT IS MILK TEA POWDER?",
      answer:
        "An all-in-one blend of tea, cream, and sugar for a ready-to-drink bubble tea that is as easy to make as it is to drink. This mix can be used to make iced, blended, and hot drinks and come in four flavors: Classic, Earl Grey, Matcha and Taro. ",
    },
    {
      question: "ARE YOUR PRODUCTS GLUTEN-FREE?",
      answer:
        "Yes, boba is made from tapioca starch, the root of the cassava plant, and is gluten-free. All of our milk tea powders are also gluten-free.",
    },
  ];
  return (
    <div tw=" max-w-5xl px-8 py-24 mx-auto my-0 space-y-10 ">
      <h1 tw=" text-center mb-10 text-5xl font-bold">FAQ</h1>

      {FaqData.map((faq, index) => (
        <div tw="text-3xl leading-10 " key={index}>
          <p tw="font-bold mb-1">{faq.question}</p>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
