import Contact from "../contact";
import Footer from "../footer";
import { FaFlask, FaSprayCan, FaClock, FaRedo } from "react-icons/fa";




export default function Home() {

    const products = [
        {
            id: 1,
            name: "Cactivia",
            image: "/prod1L.jpeg",
            price: "12.900TND",
            size: "1L",
            description: "Une solution puissante et écologique 5x concentrée conçue pour protéger les cultures de figues de Barbarie contre l'insecte dévastateur de la cochenille."
        }
    ]

    const steps = [
        {
            id: 1,
            icon: <FaFlask size={30} />,
            title: "Préparation du mélange",
            description: "Mélanger 1 L de Cactivia avec 100 L d’eau"
        },
        {
            id: 2,
            icon: <FaSprayCan size={30} />,
            title: "Pulvérisation",
            description: "Pulvériser sur les raquettes infectées (recto-verso)"
        },
        {
            id: 3,
            icon: <FaClock size={30} />,
            title: "Moment d'application",
            description: "Appliquer tôt le matin ou en fin d’après-midi"
        },
        {
            id: 4,
            icon: <FaRedo size={30} />,
            title: "Répétition",
            description: "Répéter après 4 à 5 jours si nécessaire"
        }
    ];


    return (
        <div className="bg-[#F6F6F6]">

            <div className="flex flex-wrap justify-center gap-8 p-4 my-[10vh]">
                {products.map((product) => (
                    <div key={product.name} className="flex flex-col items-center max-w-[30vw]">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-[30vw] h-auto object-cover rounded-xl shadow-lg"
                        />
                        <div className="bg-[#d1d1d1]/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 mt-4 w-full">
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <div className="flex sm:flex-row items-center justify-between gap-4 mb-2">
                                <h3 className="font-bold">{product.price}</h3>
                                <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black hover:bg-[#4a5d0a] cursor-pointer">
                                    Buy
                                </button>
                            </div>
                            <p className="text-sm opacity-70">{product.description}</p>
                        </div>
                    </div>
                ))}
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


            <div id="contact">
                <Contact />
            </div>

            <Footer />

        </div >

    );
}