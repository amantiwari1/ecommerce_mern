import Toggle from '../../theme/themeToggle'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import NavItems from './NavItems'
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi'
import { useState } from 'react'
import DropdownTwin from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../shared/reduxHooks'


const ShopItems = [
    {
        name: "Boba kits",
        to: "/collections/boba-kits"
    },
    {
        name: "Powders",
        to: "/collections/powders"
    },
    {
        name: "Tea Leaves",
        to: "/collections/tea-leaves"
    },
    {
        name: "Must Haves",
        to: "/collections/tea-leaves"
    },
    {
        name: "Shop All",
        to: "/collections/all"
    },
]

const AboutItems = [
    {
        name: "Our Story",
        to: "/pages/about"
    },
    {
        name: "What is Boba?",
        to: "/pages/what-is-boba"
    },
    {
        name: "Ingredients List",
        to: "/pages/ingredients-list"
    },

]


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const onClick = () => setMenu(!menu);

    const isAuth = useAppSelector((state) => state.userReducer.isAuth)
    return (
        <nav tw=" top-0 p-3 md:px-10 lg:px-20 bg-lightnav space-y-1 text-center items-center h-10v md:( flex space-y-0 justify-between)   dark:(bg-darknav)" >


            <div tw="flex justify-between  " >
                <h1 tw=" text-3xl  tracking-wider text-blue-300 font-bold" >Sammoo</h1>
                <div tw="flex  items-center space-x-5" >
                    <Link to="/cart" >
                        <GiShoppingCart tw="text-white text-2xl md:hidden cursor-pointer" />
                    </Link>

                    <div tw="md:hidden" >
                        <Toggle />
                    </div>
                    <GiHamburgerMenu onClick={onClick} tw="text-white text-2xl md:hidden mr-2 cursor-pointer" />
                </div>
            </div>


            <div css={[menu ? tw`right-0 ` : tw`-right-full`]} tw=" fixed z-20 transition-all md:space-x-5  bg-lightnav items-center w-screen h-screen space-y-10 md:(static flex h-auto space-y-0 w-auto) dark:(bg-darknav )" >
                <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) " >
                    <NavItems onClick={onClick} to="/" >Home</NavItems>
                    <NavItems onClick={onClick} to="/editProduct" >Add Porduct</NavItems>
                </div>

                <DropdownTwin onTurnNav={onClick} name='Shop' navitems={ShopItems} />
                <DropdownTwin onTurnNav={onClick} name='About' navitems={AboutItems} />
                <Link to="/cart" >
                    <GiShoppingCart tw="xs:hidden md:inline text-white text-2xl  cursor-pointer" />
                </Link>
                <div tw="xs:hidden  md:inline" >
                    <Toggle tw=" items-center pt-2 " />
                </div>

                <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) " >

                    {
                        !isAuth ? <Link onClick={onClick} tw="py-3 px-4  focus:outline-none  text-white text-center bg-indigo-600 hover:bg-indigo-500 rounded-md" to="/signin" >Sign In</Link> :
                            <NavItems onClick={onClick}  to="/Logout" >Log out</NavItems>
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar