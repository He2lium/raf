import {Audit, Benefits, Cta, EndBanner, Faq, Hero, Reviews, Shorts, Tariffs,} from './_components';
import FollowUp from "@/app/_components/intro/follow-up";

export default function Home() {
    return (
        <>
            <Hero/>
            <FollowUp/>
            <Tariffs/>
            <Shorts />
            <Benefits/>
            <Audit/>
            <Cta/>
            <Reviews/>
            <Faq/>
            <EndBanner/>
        </>
    );
}
