/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from "twin.macro";
import {Link} from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  // "FAQ", "Contact", "Wholesale", "Refund Policy", "Privacy Policy", "Terms of Service"

  const leftData = [
    {
      name: "FAQ",
      to: "/pages/faq",
    },
    {
      name: "Contact",
      to: "/ContactUs",
    },
    {
      name: "Wholesale",
      to: "/",
    },
    {
      name: "Refund Policy",
      to: "/",
    },
    {
      name: "Privacy Policy",
      to: "/",
    },
    {
      name: "Terms of Service",
      to: "/",
    },
  ];

  const SocialData = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "/",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      href: "/",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "/",
    },
    {
      name: "Pinterest",
      icon: FaPinterestP,
      href: "/",
    },
  ];

  return (
    <div tw="grid md:grid-cols-2 lg:grid-cols-3 md:px-32  text-black bg-blue-300  py-10 px-4 bg-darknav text-white">
      <div tw="flex flex-row md:flex-col space-x-2 justify-center   py-10 md:p-10 flex-wrap  md:(space-y-5 space-x-0)">
        {leftData.map((footeritems) => (
          <Link tw="px-1 items-center" to={footeritems.to}>
            <span tw="md:hidden text-2xl mr-2">/</span>
            {footeritems.name}
          </Link>
        ))}
      </div>

      <div tw="flex flex-row md:flex-col space-x-2 justify-center  py-10 md:p-10 flex-wrap  md:(space-y-5 space-x-0)">
        {SocialData.map((x, i) => (
          <Link tw="flex items-center" to={x.href} key={i}>
            <span tw="md:hidden text-2xl mr-2">/</span>
            <x.icon tw="text-white mr-1.5" /> {x.name}
          </Link>
        ))}
      </div>

      <div tw="md:(col-span-2 text-left ) text-center lg:col-auto">
        <p tw="text-3xl leading-10">
          SAMMEE provides a curated experience that will make you a boba
          connoisseur overnight.✨
        </p>
      </div>
    </div>
  );
};

export default Footer;
