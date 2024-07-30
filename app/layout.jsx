import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Icon } from '@iconify-icon/react';
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });
const nunito = Nunito({
    subsets: ["latin"],
    variable: '--font-nunito'
});

export const metadata = {
    title: "Movies4Mood",
    description: "Find Movie Recommendations Based on Your Mood",
    keywords: [
        'Movies',
        'Stream',
        'Watch',
        'Full Movie',
        'Serries',
        'Anime',
        'Cartoons',
        'Animations',
        'Actions',
        'Drama',
        'Science Fictions'
    ],
    openGraph: {
        images: '/seo_hero.jpg',
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9887RRJ3B"></Script>
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-T9887RRJ3B');
                    `}
                </Script>
                {process.env.ENVIRONMENT_TYPE === 'prod' && (
                    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2903325451480987"
                    crossorigin="anonymous"></Script>
                )}
            </head>
            <body className={montserrat.className}>
                <header>
                    <Container>
                        <Header/>
                    </Container>
                </header>
                <main>
                    {children}
                </main>
                <footer className="mt-4 py-10">
                    <div className="flex items-center gap-1 justify-center">
                        <span>Made with</span>
                        <Icon icon="fluent-emoji:red-heart" className="text-2xl" />
                        <span>by <span className="underline">EZFLOW</span></span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
