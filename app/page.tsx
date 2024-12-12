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
import FollowUp from "@/app/_components/intro/follow-up";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <FollowUp />
            <Tariffs/>
            <Benefits/>
            <Audit/>
            <Cta/>
            <Reviews/>
            <Faq/>
            <EndBanner/>
            <Footer/>
        </>
    );
}
