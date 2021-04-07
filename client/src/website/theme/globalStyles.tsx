import { Global, css } from '@emotion/react'


import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
  }
  body {
    ${tw`bg-lightmode dark:(bg-darkmode text-white) transition-all`}
    scroll-behavior: smooth;
  }
` 

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles