import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";
import Contact from "../contact";
import Footer from "../footer";



export default function AboutUs() {

    return (
        <div className="bg-white overflow-x-hidden">

            <main className="text-center py-[20vh] flex flex-col items-center px-[15vw] w-full bg-[url('/about-us.jpg')] bg-cover bg-center bg-no-repeat h-[100vh]">

                <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 flex flex-col items-center gap-2 w-full max-w-3xl mt-auto sm:mt-5 sm:py-15">
                    <h3 className="text-sm">Our Story</h3>
                    <h1 className="text-2xl sm:text-5xl text-black font-black mt-2 sm:text-5xl">
                        We are a team of passionate individuals united by our commitment to sustainability.
                    </h1>

                    <div className="flex flex-row gap-4 mt-4">

                        <a href="#content">
                            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[5px] flex items-center gap-2 active:bg-[#4a5d0a] cursor-pointer hover:bg-[#4a5d0a]">
                                See More <FaCircleArrowDown />
                            </button>
                        </a>

                        <a href="#contact">
                            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-transparent font-medium px-[5px] active:bg-white/20 cursor-pointer hover:bg-white/40">
                                Contact Us
                            </button>
                        </a>

                    </div>
                </div>

            </main>

            {/* how cactivia came to life */}

            <div className="flex flex-col items-center mt-10 text-black mx-[10vw] sm:mx-[30vw]" id="content">
                <h2 className="font-bold mb-2">How Cactivia Came to Life</h2>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-center opacity-75"> Born out of a competition within the 3ZERO TBS club, our mission is to create eco-friendly and natural formulation for the cochineal insect
                        , supporting both local farmers and the environment.
                        At Cactivia, we strive to leave a meaningful impact on the world by promoting sustainable agricultural practices and
                        fostering economic growth in Tunisia.</p>
                    <Image src="/3zero-team.jpg" alt="cactivia" width={300} height={300} className="my-4 shadow-[0_7px_0_0_black] rounded-xl h-[25vh] object-cover sm:h-[50vh] sm:w-[50vw]" />
                </div>
            </div>

            {/* our mission */}

            <div className="flex flex-col items-center mt-10 text-black mx-[10vw] sm:mx-[30vw]">
                <Image src="/our-mission.png" alt="cactivia" width={300} height={400} className="my-4 shadow-[0_7px_0_0_black] rounded-xl h-[25vh] object-cover sm:h-[50vh] sm:w-[50vw]" />
                <h2 className="font-bold mb-2">Our Mission</h2>
                <div className="flex flex-col items-center gap-4 opacity-75">
                    <p className="text-center"> At Cactivia, our mission is to revolutionize agriculture with sustainable, eco-friendly fertilizers made
                        from natural resources. We aim to support local farmers, enhance crop health, and promote greener, more sustainable farming practices. Through innovation and dedication, we strive to improve the Tunisian economy while making a positive impact on the environment.</p>
                </div>
            </div>

            <div id="contact">
                <Contact />
            </div>

            <Footer />

        </div >

    );
}
