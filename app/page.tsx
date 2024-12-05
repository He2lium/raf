import {
    Audit,
    Banner,
    Benefits,
    Contacts,
    Cta,
    EndBanner,
    Faq,
    Footer,
    Header,
    Hero,
    Intro,
    Reviews,
    Tariffs,
} from './_components';

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Audit/>
            <Benefits/>
            <Intro/>
            <Tariffs/>
            <Banner/>
            <Cta/>
            <Reviews/>
            <Faq/>
            <EndBanner/>
            <Contacts/>
            <Footer/>
        </>
    );
}
