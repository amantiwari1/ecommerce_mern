/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { css, styled } from 'twin.macro'


const InstaCardStyle = css`

    @media screen and (max-width: 768px) {
        min-width: 200px;
        height: 200px;
    }
`

const InstaCardCustom = styled.a(() => [
    tw`min-w-full    md:(max-w-lg min-w-0) h-96  overflow-x-auto overflow-y-hidden relative cursor-pointer`,
    InstaCardStyle
])

const InstaCard = () => {
    return (

        <InstaCardCustom href="/" >
            <img tw="absolute inset-0 h-full w-full md:(object-fill object-center)" src="https://instagram.fjai2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/168751520_208304583963934_1982897407472999716_n.jpg?tp=1&_nc_ht=instagram.fjai2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=BA6kgltotEkAX_uoeV-&edm=APU89FAAAAAA&ccb=7-4&oh=a8eecc7c3c541a4cd81faaa0b1212efe&oe=60921318&_nc_sid=86f79a" loading="lazy" height="200" width="200" alt="" />
            <div tw="absolute inset-0"></div>
            <div tw="flex flex-col justify-between text-white h-full relative opacity-0 bg-gray-900  bg-opacity-75 transition-opacity duration-150 hover:opacity-100">
                <h1 tw="text-xl p-4 leading-10 overflow-ellipsis  overflow-hidden">Ordering extra boba is equivalent to ordering guacamole at Chipotle — a necessary luxury</h1>
                <time tw="text-lg p-3">April 5, 2021</time>
            </div>
        </InstaCardCustom>

    )
}

export default InstaCard
