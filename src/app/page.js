import Image from "next/image";
import Nav from "./nav";
import { FaCircleArrowDown, FaCircleCheck, FaLeaf } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { FaTree } from "react-icons/fa";
import Contact from "./contact";
import Footer from "./footer";



export default function Home() {
  let specialTraitrs = [
    {
      id: 1,
      name: "Eco-Friendly",
      description: "Made from natural ingredients.",
      icon: <FaTree />,
    },
    {
      id: 2,
      name: "Effective",
      description: "Helps cure the cochineal insect naturally.",
      icon: <FaCircleCheck />,
    },
    {
      id: 1,
      name: "Sustainable",
      description: "Promotes eco-friendly gardening.",
      icon: <FaLeaf />,
    }
  ];
  return (
    <div>

      <main className="text-center py-[20vh] flex flex-col items-center bg-[#daa547] px-[15vw] w-full">

        <h3 className="text-sm">Treat Your Plants With Care</h3>
        <h1 className="text-2xl sm:text-7xl text-black font-black mt-2">
          Cactivia is your go-to solution for protecting prickly pears from the cochineal insect.
        </h1>

        <div className="flex flex-row gap-4 mt-4">

          <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[5px] flex items-center gap-2">
            See More <FaCircleArrowDown />
          </button>

          <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#daa547] font-medium px-[5px]">
            Contact Us
          </button>

        </div>

      </main>

      {/* problem & solution */}

      <div className="flex flex-col items-center gap-5 mt-10 text-white">

        <div className="bg-[#52030C] px-4 py-4 rounded-xl flex flex-col gap-2 mx-[10vw] border border-black border-3 shadow-[0_7px_0_0_black]">
          <Image src="/problem-img.jpg" alt="Cactivia Logo" width={300} height={300} className="rounded-xl" />

          <div className="flex items-center gap-2">
            <MdReportProblem />
            <h2 className="font-bold">The Problem</h2>
          </div>

          <p className="text-sm opacity-75">
            The cochineal insect is spreading fast across Tunisia, destroying prickly pear plants by sucking the sap and weakening entire crops.<br />What starts as a few white spots quickly turns into a full-blown infestation, putting entire harvests at risk. With Care
          </p>
        </div>

        <div className="bg-[#59760b] px-4 py-4 rounded-xl flex flex-col gap-2 mx-[10vw] border border-black border-3 shadow-[0_7px_0_0_black]">

          <div className="flex items-center gap-2">
            <FaCircleCheck />
            <h2 className="font-bold">Our solution</h2>
          </div>

          <p className="text-sm opacity-75">
            Our product offers a fast, effective, and environmentally safe way to eliminate the cochineal insect threatening prickly pear crops. By targeting the pest directly without harming the plant, our formula ensures healthier growth, better yields, and long-term protection.
          </p>

          <Image src="/solution-img.jpg" alt="Cactivia Logo" width={300} height={300} className="rounded-xl" />
        </div>

        <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black">
          See Our Products
        </button>

      </div>

      {/* what makes cactivia special */}

      <div className="flex flex-col items-center gap-5">

        <div className="bg-[#A35227] px-4 py-4 rounded-xl flex flex-col items-center gap-2 mx-[10vw] border border-black border-3 shadow-[0_7px_0_0_black] mt-10 text-white">
          <h2 className="font-bold mb-2">What Makes Cactivia Special</h2>
          {specialTraitrs.map((trait) => (
            <div key={trait.id} className="flex item-center gap-2 mx-2">
              <div className="text-2xl p-5 bg-[#B86335] rounded-xl text-[#daa547]">{trait.icon}</div>
              <div>
                <h3 className="font-semibold">{trait.name}</h3>
                <p className="text-sm opacity-75">{trait.description}</p>
              </div>
            </div>
          ))}

        </div>

        <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black">
          See Our Products
        </button>

      </div>

      <Contact />

      <Footer />
      
    </div>

  );
}
