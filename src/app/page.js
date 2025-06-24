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
      id: 3,
      name: "Sustainable",
      description: "Promotes eco-friendly gardening.",
      icon: <FaLeaf />,
    }
  ];

  let products = [
    {
      id: 1,
      name: "Cactivia Original",
      image: "/productA.jpg",
      price: "19.99 TND",
    },
    {
      id: 2,
      name: "Cactivia Spray",
      image: "/productA.jpg",
      price: "12.99 TND",
    },
    {
      id: 3,
      name: "Cactivia Plus",
      image: "/productA.jpg",
      price: "24.99 TND",
    },
  ];

  return (
    <div className="bg-[#daa547]">

      <main className="text-center py-[20vh] flex flex-col items-center px-[15vw] w-full bg-[url('/solution-img.jpg')] bg-cover bg-center bg-no-repeat h-[90vh]">

        <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 flex flex-col items-center gap-2 w-full max-w-3xl mt-auto">
          <h3 className="text-sm">Treat Your Plants With Care</h3>
          <h1 className="text-2xl sm:text-7xl text-black font-black mt-2">
            Cactivia is your go-to solution for protecting prickly pears from the cochineal insect.
          </h1>

          <div className="flex flex-row gap-4 mt-4">

            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[5px] flex items-center gap-2">
              See More <FaCircleArrowDown />
            </button>

            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-transparent font-medium px-[5px]">
              Contact Us
            </button>

          </div>
        </div>

      </main>

      {/* products */}

      <div className="flex flex-col items-center gap-5 mt-10 text-black">
        <h2 className="font-bold">Products Listing</h2>

        {products.map((product) => (
          <div key={product.id} className="bg-[#ebbc6a] rounded-xl shadow-[0_7px_0_0_black] p-2 flex items-center justify-between gap-2 w-[80vw]">
            <div className="flex items-center gap-4">
              <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-xl" />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="text-sm opacity-75 font-bold">{product.price}</span>
              </div>
            </div>
            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black mt-2">
              Buy
            </button>
          </div>
        ))}

      </div>

      {/* problem & solution */}

      <div className="flex flex-col items-center gap-5 mt-10 text-white">

        <div className="bg-[url('/problem-img.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-2 bg-[#59760b] opacity-90 px-10 py-4">

            <div className="flex items-center gap-2">
              <MdReportProblem />
              <h2 className="font-bold">The Problem</h2>
            </div>

            <p className="text-sm opacity-70 mt-2">
              The cochineal insect is spreading fast across Tunisia, destroying prickly pear plants by sucking the sap and weakening entire crops.
            </p>


            <div className="flex items-center gap-2 mt-2">
              <FaCircleCheck />
              <h2 className="font-bold">Our solution</h2>
            </div>

            <p className="text-sm opacity-70 mt-2">
              Our product offers a fast, effective, and environmentally safe way to eliminate the cochineal insect threatening prickly pear crops.
            </p>
          
            <Image src={"/packaging.jpg"} width={500} height={500} className="my-4 shadow-[0_7px_0_0_black] rounded-xl"/>

          </div>

        </div>

        <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black">
          See Our Products
        </button>

      </div>

      {/* what makes cactivia special */}

      <div className="flex flex-col items-center gap-5">

        <div className="px-4 py-4 flex flex-col items-center gap-2 mx-[10vw] mt-10">
          <h2 className="font-bold mb-2">What Makes Cactivia Special</h2>
          {specialTraitrs.map((trait) => (
            <div key={trait.id} className="flex item-center gap-4 mx-2">
              <div className="text-2xl p-5 bg-[#ebbc6a] rounded-xl text-[#59760b]">{trait.icon}</div>
              <div>
                <h3 className="font-semibold">{trait.name}</h3>
                <p className="text-sm opacity-75">{trait.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

      <Contact />

      <Footer />

    </div >

  );
}
