import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {Oswald} from 'next/font/google';
import './globals.css';
import {Toaster} from 'react-hot-toast'
import {Footer, Header} from "@/app/_components";
import YandexMetrica from "@/app/_components/yandex-metrica/yandex-metrica";

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

const oswald = Oswald({
    subsets: ['latin', 'cyrillic'],
    weight: ['600'],
    variable: '--font-oswald',
});

export const metadata: Metadata = {
    title: 'Раф знает!',
    description: 'Научись зарабатывать на коммерческой недвижимости!',
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
