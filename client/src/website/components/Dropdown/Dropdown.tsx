/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { useCallback, useEffect, useRef } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import { Link } from 'react-router-dom';
import { DropdownInterface } from './DropdownInterface';
import { JSX } from '@emotion/react/jsx-runtime';


const DropdownTwin = ({ name, navitems, onTurnNav }: DropdownInterface): JSX.Element => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive)

  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isActive) {
        setIsActive(false);
        console.log('I pressed');
      }
    },
    [setIsActive, isActive]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <div>
      <div tw="relative inline-block text-left">
        <div >
          <button onClick={onClick} type="button" tw="inline-flex  justify-center w-full rounded-md  shadow-sm px-2 py-2  text-sm font-medium text-white hover:text-blue-400 focus:(outline-none text-blue-400) " id="options-menu" aria-expanded="true" aria-haspopup="true">
            {name}
            {isActive ? <AiFillCaretDown tw="ml-1 items-center mt-0.5" /> : <AiFillCaretUp tw="ml-1 items-center mt-0.5" />

            }
          </button>
        </div>

        {isActive &&
          <div ref={dropdownRef} tw=" z-20 origin-bottom-right absolute -right-4   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:(bg-darkmode border-blue-50)" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

            {
              navitems.map((navitem, index) => (
                <div tw="py-1" role="none" key={index}>

                  <Link onClick={() => { onClick(); onTurnNav() }} to={navitem.to} tw=" block px-4 py-2  whitespace-nowrap text-sm text-gray-700 hover:(bg-blue-700 text-white) dark:(text-white hover:(bg-blue-700 text-white))" role="menuitem">{navitem.name}</Link>
                </div>
              ))
            }

          </div>}
      </div>
    </div>
  )
}

export default DropdownTwin


