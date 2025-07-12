import Contact from "../contact";
import Footer from "../footer";
import { FaWater } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { IoIosPartlySunny } from "react-icons/io";



export default function Home() {

    const steps = [
        {
            id: 1,
            icon: <FaWater size={30} />,
            title: "Dilute with water",
            description: "Dilute 200 ml of concentrate in 800 ml of water"
        },
        {
            id: 2,
            icon: <FaSprayCanSparkles size={30} />,
            title: "Spray",
            description: "Spray directly on both sides of leaves, stems, and fruits"
        },
        {
            id: 3,
            icon: <IoIosPartlySunny size={30} />,
            title: "Know when to apply",
            description: "Use in the early morning or late afternoon for best results"
        },
    ];


    return (
        <div className="bg-[#F6F6F6]">

            <main className="bg-[url('/product-image.jpg')] py-[20vh] flex flex-col items-center px-[15vw] w-full h-[90vh] bg-cover bg-center bg-no-repeat">

            </main>

            <div className="mx-[10vw] flex flex-col items-center">
                <div className="bg-[#d1d1d1]/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 flex flex-col gap-2 w-full max-w-3xl mt-[-10vh] sm:mt-[-15vh]">
                    <h3 className="text-lg font-bold">Cactivia</h3>
                    <div className="flex sm:flex-row items-center justify-between gap-4 mb-2">
                        <h3 className="font-bold">12.50TND</h3>
                        <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black act cursor-pointer hover:bg-[#4a5d0a]">
                            Buy
                        </button>
                    </div>
                    <p className="text-sm opacity-70">A powerful 5x concentrated, eco-friendly solution crafted to protect prickly pear crops from the devastating cochineal
                        insect.</p>
                </div>
                <div className="flex flex-col items-center mt-10 text-black mb-10">
                    <h2 className="text-lg font-bold">How to use Cactivia</h2>

                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-start"
                            >
                                <div className="text-[15vw] sm:text-8xl font-bold text-[#59760b] mb-[-4vh] sm:mb-[-5vh] z-0">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="p-5 rounded-lg bg-white shadow-md flex items-start gap-4 z-10">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="text-2xl p-2 bg-[#d1d1d1] rounded-xl text-[#59760b]">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Contact />

            <Footer />

        </div >

    );
}