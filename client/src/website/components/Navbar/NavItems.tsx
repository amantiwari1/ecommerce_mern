/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { Link } from 'react-router-dom';
import { NavItemsInterface } from "./NavbarInterface"

const NavItems = ({ to, children, onClick }: NavItemsInterface): JSX.Element => {
    return (
        <Link to={to} onClick={onClick} type="button" tw="md:inline-flex inline-block  flex-wrap py-1.5 px-4 items-center text-white justify-center rounded-xl text-center cursor-pointer transition ease-out delay-150 duration-300 hover:( bg-gray-500 ) dark:( hover:( bg-gray-600 ) text-white)" id="options-menu" aria-expanded="true" aria-haspopup="true">
            {children}
        </Link>
    ) 
}

export default NavItems