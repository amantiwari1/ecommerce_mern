/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw, { styled, css } from 'twin.macro'
import { MainSection, ProductSection, BubbleSection, CustomerSection, InstaSection, SubscribeSection, QuoteSection } from "../components"

const Home = () => {
    return (
        <div tw="flex flex-col" >
            <section>
                <MainSection />
            </section>
            <section>
                <QuoteSection />
            </section>
            <section>
                <ProductSection />
            </section>
            <section>
                <BubbleSection />
            </section>
            <section>
                <CustomerSection />
            </section>
            <section>
                <InstaSection />
            </section>
            <section>
                <SubscribeSection />
            </section>
        </div>
    )
}

export default Home;