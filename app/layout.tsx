import localFont from 'next/font/local';
import './globals.css';
import {Oswald} from "next/font/google";
import {Metadata} from "next";
import YandexMetrica from "@/app/_components/yandex-metrica/yandex-metrica";
import {Toaster} from "react-hot-toast";
import {Footer, Header} from "@/app/_components";

const gilroy = localFont({
    src: [
        {path: './_fonts/Gilroy-Bold.woff2', weight: '700', style: 'normal'},
        {path: './_fonts/Gilroy-SemiBold.woff2', weight: '600', style: 'normal'},
        {path: './_fonts/Gilroy-Medium.woff2', weight: '500', style: 'normal'},
        {path: './_fonts/Gilroy-Regular.woff2', weight: '400', style: 'normal'},
    ],
    variable: '--font-gilroy',
});

const moderustic = localFont({
    src: [
        {
            path: './_fonts/Moderustic-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-moderustic',
});

const title = 'Раф знает! - Научись зарабатывать на коммерческой недвижимости'
const description = `
Овладейте искусством успешных сделок с жилой и коммерческой 
недвижимостью! Узнайте проверенные стратегии и секреты профессионалов, которые 
помогут вам эффективно продавать и покупать объекты. Достигайте новых высот 
в карьере и доходах с реальными работающими подходами!
`


const oswald = Oswald({
    subsets: ['latin', 'cyrillic'],
    weight: ['600'],
    variable: '--font-oswald',
});

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL('https://rafznaet.ru'),
    keywords: ["коммерческая недвижимость", "жилая недвижимость", "курсы на риэлтора", "стать риэлтором"],
    appleWebApp: {
        title: 'Раф знает!',
    },
    openGraph: {
        title,
        description,
        url: "https://rafznaet.ru",
        type: "website",
        images: [
            {
                url: "og.png",
                width: 1000,
                height: 525,
                alt: "Раф знает",
            },
        ],
    },
    robots: {
        follow: true,
        index: true
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
        <body
            className={`${gilroy.variable} ${moderustic.variable} ${oswald.variable}`}
        >
        <YandexMetrica>
            <Toaster/>
            <div className={'app'}>
                <Header/>
                <main className={'app-content'}>
                    {children}
                </main>
                <Footer/>
            </div>
        </YandexMetrica>
        </body>
        </html>
    )
        ;
}
