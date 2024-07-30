import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Icon } from '@iconify-icon/react';

const montserrat = Montserrat({ subsets: ["latin"] });
const nunito = Nunito({
    subsets: ["latin"],
    variable: '--font-nunito'
});

export const metadata = {
    title: "Movies4Mood",
    description: "Discover the Best Movies to Match Your Mood",
    keywords: [
        'Movies',
        'Stream',
        'Watch',
        'Full Movie',
    ],
    openGraph: {
        images: '/seo_hero.jpg',
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
