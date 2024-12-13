'use client'

import {YandexMetricaProvider} from "next-yandex-metrica";
import {PropsWithChildren} from "react";

export default function YandexMetrica({children}: PropsWithChildren) {
    return <YandexMetricaProvider
        tagID={99204203}
        initParameters={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        }}
    >
        {children}
    </YandexMetricaProvider>
}