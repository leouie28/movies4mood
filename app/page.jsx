import Container from "@/components/Container";
import { Nunito } from "next/font/google";
import { moods } from "@/constant/moods";
import Button from "@/components/Button";

const nunito = Nunito({
    subsets: ["latin"],
    variable: '--font-nunito'
});

export default function Home() {

    const moodlist = moods

    return (
        <>
            <Container>
                <div className="py-6">
                    <div className="text-center">
                        <h1 className={`${nunito.className} mt-4 font-sans font-extrabold md:font-black text-4xl md:text-5xl antialiased`}>
                            Find Movie Recommendations Based on Your Mood
                        </h1>
                        <p className="text-xl my-6">What is your mood right now?</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        { moodlist.map((d, i) => (
                            <Button name={d.mood} emote={d.emote} key={i} />
                        )) }
                    </div>
                </div>
            </Container>
        </>
    );
}
