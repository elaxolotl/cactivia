import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";
import Contact from "../contact";
import Footer from "../footer";



export default function AboutUs() {

    return (
        <div className="bg-white overflow-x-hidden">

            <main className="text-center py-[20vh] flex flex-col items-center px-[15vw] w-full bg-[url('/about-us.jpg')] bg-cover bg-center bg-no-repeat h-[100vh]">

                <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 flex flex-col items-center gap-2 w-full max-w-3xl mt-auto sm:mt-5 sm:py-15">
                    <h3 className="text-sm">Notre histoire</h3>
                    <h1 className="text-2xl sm:text-5xl text-black font-black mt-2 sm:text-5xl">
                        Nous sommes une équipe de personnes passionnées unies par notre engagement envers la durabilité.
                    </h1>

                    <div className="flex flex-row gap-4 mt-4">

                        <a href="#content">
                            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[5px] flex items-center gap-2 active:bg-[#4a5d0a] cursor-pointer hover:bg-[#4a5d0a]">
                                Voir plus <FaCircleArrowDown />
                            </button>
                        </a>

                        <a href="#contact">
                            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-transparent font-medium px-[5px] active:bg-white/20 cursor-pointer hover:bg-white/40">
                                Contactez-nous
                            </button>
                        </a>

                    </div>
                </div>

            </main>

            {/* how cactivia came to life */}

            <div className="flex flex-col items-center mt-10 text-black mx-[10vw] sm:mx-[30vw]" id="content">
                <h2 className="font-bold mb-2">Comment Cactivia a vu le jour</h2>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-center opacity-75">
                        Né d’un concours organisé au sein du club 3ZERO TBS, notre objectif est de créer une formulation écologique et naturelle contre la cochenille,
                        tout en soutenant les agriculteurs locaux et en respectant l’environnement.
                        Chez Cactivia, nous nous efforçons de laisser un impact positif sur le monde en promouvant des pratiques agricoles durables
                        et en favorisant la croissance économique en Tunisie.
                    </p>
                    <Image
                        src="/3zero-team.jpg"
                        alt="cactivia"
                        width={300}
                        height={300}
                        className="my-4 shadow-[0_7px_0_0_black] rounded-xl h-[25vh] object-cover sm:h-[50vh] sm:w-[50vw]"
                    />
                </div>
            </div>


            {/* our mission */}

            <div className="flex flex-col items-center mt-10 text-black mx-[10vw] sm:mx-[30vw]">
                <Image
                    src="/our-mission.png"
                    alt="cactivia"
                    width={300}
                    height={400}
                    className="my-4 shadow-[0_7px_0_0_black] rounded-xl h-[25vh] object-cover sm:h-[50vh] sm:w-[50vw]"
                />
                <h2 className="font-bold mb-2">Notre mission</h2>
                <div className="flex flex-col items-center gap-4 opacity-75">
                    <p className="text-center">
                        Chez Cactivia, notre mission est de révolutionner l’agriculture grâce à des engrais durables et écologiques
                        fabriqués à partir de ressources naturelles. Nous visons à soutenir les agriculteurs locaux, améliorer la santé des cultures
                        et encourager des pratiques agricoles plus vertes et durables. Grâce à l’innovation et à notre engagement,
                        nous cherchons à renforcer l’économie tunisienne tout en ayant un impact positif sur l’environnement.
                    </p>
                </div>
            </div>


            <div id="contact">
                <Contact />
            </div>

            <Footer />

        </div >

    );
}
