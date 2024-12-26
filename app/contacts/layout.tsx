import {PropsWithChildren} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Раф знает! - Контакты",
    robots: {
        follow: true,
        index: true
    },
};

export default function Layout({children}: PropsWithChildren) {
    return (
        <>{children}</>
    )
}