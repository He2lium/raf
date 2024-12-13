import {Audit, Benefits, Cta, EndBanner, Faq, Hero, Reviews, Tariffs,} from './_components';
import FollowUp from "@/app/_components/intro/follow-up";

export default function Home() {
    return (
        <>
            <Hero/>
            <FollowUp/>
            <Tariffs/>
            <Benefits/>
            <Audit/>
            <Cta/>
            <Reviews/>
            <Faq/>
            <EndBanner/>
        </>
    );
}
