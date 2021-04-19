/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import SammeeImage from "../../../assets/images/Sammee2.jpg";

const AboutUs = () => {
  const AboutData = [
    "SAMMEE turns boba lovers into connoisseurs by delivering a fully curated DIY experience with everything you need to make the best boba tea at home.",
    "In the midst of a global pandemic and a nationwide quarantine, we noticed the growing need for accessible goods. This got us thinking: there must be thousands who don't have easy access to their favorite products.",
    "Our quest for an all-in-one kit that can be prepared and enjoyed anywhere began and eventually led to the creation of SAMMEE. We see boba as a catalyst for bringing people together and we wanted this to be accessible to everyone.",
    "All our kits are assembled with high-quality ingredients, boba sourced straight from Taiwan, and easy-to-follow recipes and instructions to ensure the perfect drink every time.",
    "Whether you’re trying boba for the first time or just looking for a DIY activity with some friends, we’re happy to be a part of the process.",
    "Cheers! 🥂",
  ];
  return (
    <div tw=" max-w-5xl px-8 py-24 mx-auto my-0 space-y-10 ">
      <h1 tw="text-center mb-10 text-5xl font-bold">About Us</h1>

      <img tw="w-full h-auto" src={SammeeImage} alt="" />

      <h1 tw="text-5xl font-bold">Curated by us, made by you.</h1>

      {AboutData.map((string) => (
        <p tw="text-3xl">{string}</p>
      ))}
    </div>
  );
};

export default AboutUs;
