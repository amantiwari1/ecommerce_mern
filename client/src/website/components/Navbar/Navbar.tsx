import Toggle from "../../theme/themeToggle";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import DropdownTwin from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/reduxHooks";
import userActionCreator from "../../../actions/userAction";

const ShopItems = [
  {
    name: "Boba kits",
    to: "/collections/boba-kits",
    isLink: true,
  },
  {
    name: "Powders",
    to: "/collections/powders",
    isLink: true,
  },
  {
    name: "Tea Leaves",
    to: "/collections/tea-leaves",
    isLink: true,
  },
  {
    name: "Must Haves",
    to: "/collections/tea-leaves",
    isLink: true,
  },
  {
    name: "Shop All",
    to: "/collections/all",
    isLink: true,
  },
];

const AboutItems = [
  {
    name: "Our Story",
    to: "/pages/about",
    isLink: true,
  },
  {
    name: "What is Boba?",
    to: "/pages/what-is-boba",
    isLink: true,
  },
  {
    name: "Ingredients List",
    to: "/pages/ingredients-list",
    isLink: true,
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const onClick = () => setMenu(!menu);
  const dispatch = useAppDispatch();

  const myAccount = [
    {
      name: "My Orders",
      isLink: true,
      to: "/order",
    },
    {
      name: "My Cart",
      isLink: true,
      to: "/cart",
    },
    {
      name: "Log out",
      isLink: false,
      onClick: () => dispatch(userActionCreator.logout()),
    },
  ];

  const { isAuth, currentUser } = useAppSelector((state) => state.userReducer);

  if (currentUser.isAdmin) {
    myAccount.push({
      name: "Add Product",
      isLink: true,
      to: "/editProduct",
    });
  }

  return (
    <nav tw=" top-0 p-3 md:px-10 lg:px-20 bg-lightnav space-y-1 text-center items-center h-10v md:( flex space-y-0 justify-between)   dark:(bg-darknav)">
      <div tw="flex justify-between  ">
        <Link to="/" tw=" text-3xl  tracking-wider text-blue-300 font-bold">Sammoo</Link>
        <div tw="flex  items-center space-x-5">
          <Link to="/cart">
            <AiOutlineShoppingCart tw="text-white text-2xl md:hidden cursor-pointer" />
          </Link>

          <div tw="md:hidden">
            <Toggle />
          </div>
          <GiHamburgerMenu
            onClick={onClick}
            tw="text-white text-2xl md:hidden mr-2 cursor-pointer"
          />
        </div>
      </div>

      <div
        css={[menu ? tw`right-0 ` : tw`-right-full`]}
        tw=" fixed z-20 transition-all md:space-x-5  bg-lightnav items-center w-screen h-screen space-y-10 md:(static flex h-auto space-y-0 w-auto) dark:(bg-darknav )">
        <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) ">
          <NavItems onClick={onClick} to="/">
            Home
          </NavItems>
        </div>

        <DropdownTwin onTurnNav={onClick} name="Shop" navitems={ShopItems} />
        <DropdownTwin onTurnNav={onClick} name="About" navitems={AboutItems} />
        <Link to="/cart">
          <AiOutlineShoppingCart tw="xs:hidden md:inline text-white text-2xl  cursor-pointer" />
        </Link>
        <div tw="xs:hidden  md:inline">
          <Toggle tw=" items-center pt-2 " />
        </div>

        <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) ">
          {!isAuth ? (
            <Link
              onClick={onClick}
              tw="py-3 px-4  focus:outline-none  text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md"
              to="/signin">
              Sign In
            </Link>
          ) : (
            <>
              <DropdownTwin
                onTurnNav={() => {
                  onClick();
                }}
                name="My Account"
                navitems={myAccount}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
