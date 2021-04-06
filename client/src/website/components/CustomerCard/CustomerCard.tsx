/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'


const CustomerCard = () => {
    return (
        <div tw="grid grid-cols-6 p-3 max-w-xl"  >

            <img tw="rounded-full h-9  md:h-14" alt="" src="https://cdn.shopify.com/s/files/1/0264/3066/8855/files/C769867C-A81A-45AE-BF9A-4384F73F09E2-B1D91AA7-C8DF-4B78-90A2-EC57EAE90046_2_80x80_crop_center.jpg" />

            <div tw="col-span-5 space-y-7 " >
                <p tw="text-xl font-semibold " >
                    This store is my go to for tapioca pearls. I personally cannot find any boba where I live, and I had very bad experience with some tapioca pearls I bought on amazon, so I always buy my boba here. Very chewy and just delicious, I highly recommend it.</p>

                <p tw="text-2xl text-white font-bold" >– Gabriela V.</p>
            </div>

        </div>
    )
}

export default CustomerCard
