"use client";
import Image from "next/image";
import { FaCircleArrowDown, FaCircleCheck, FaLeaf } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { FaTree } from "react-icons/fa";
import Contact from "./contact";
import Footer from "./footer";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();

  let specialTraitrs = [
    {
      id: 1,
      name: "Écologique",
      description: "Fabriqué à partir d'ingrédients naturels.",
      icon: <FaTree />,
    },
    {
      id: 2,
      name: "Efficace",
      description: "Aide à guérir naturellement la cochenille.",
      icon: <FaCircleCheck />,
    },
    {
      id: 3,
      name: "Durable",
      description: "Favorise le jardinage écologique.",
      icon: <FaLeaf />,
    }
  ];

  return (
    <div className="bg-[#ededed] overflow-x-hidden">

      <main className="text-center py-[20vh] flex flex-col items-center px-[15vw] w-full bg-[url('/solution-img.jpg')] bg-cover bg-center bg-no-repeat h-[90vh] sm:h-[100vh]">

        <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-[0_7px_0_0_black] p-4 sm:py-15 flex flex-col items-center gap-2 w-full max-w-3xl mt-auto sm:mt-5">
          <h3 className="text-sm">Traitez vos plantes avec soin</h3>
          <h1 className="text-2xl sm:text-5xl text-black font-black mt-2 sm:mt-0c">
            Cactivia est votre solution idéale pour protéger les figues de Barbarie de l'insecte cochenille.
          </h1>

          <div className="flex flex-row gap-2 mt-4 text-[14px]">
            <a href="#our-product">
              <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] px-[10px] flex items-center gap-2 active:bg-[#4a5d0a] cursor-pointer hover:bg-[#4a5d0a] sm:font-medium">
                Voir Plus <FaCircleArrowDown />
              </button>
            </a>
            <a href="#contact">
              <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-transparent font-medium px-[5px] active:bg-white/20 cursor-pointer hover:bg-white/40 sm:font-medium">
                Contactez-nous
              </button>
            </a>

          </div>
        </div>

      </main>

      {/* product */}

      <div className="flex flex-col items-center mt-10 text-black mx-[10vw]" id="our-product">
        <h2 className="font-bold sm:text-2xl">Notre Produit</h2>
        <div className="flex flex-col items-center gap-4">
          <Image src="/packaging-product.jpg" alt="cactivia" width={200} height={200} className="my-4 shadow-[0_7px_0_0_black] rounded-xl sm:h-[60vh] sm:w-auto" />
          <div>
            <h3 className="text-lg font-semibold">Cactivia</h3>
            <span className="text-sm opacity-75 font-bold">62.900 TND</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a onClick={() => router.push('/our-product')}>
            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black mt-2 active:bg-[#4a5d0a] cursor-pointer hover:bg-[#4a5d0a]">
              Acheter
            </button>
          </a>
          <a onClick={() => router.push('/our-product')}>
            <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-transparent font-medium px-[10px] text-black mt-2 active:bg-white/20 cursor-pointer hover:bg-white/40">
              Apprendre encore plus
            </button>
          </a>
        </div>
      </div>

      {/* problem & solution */}

      <div className="flex flex-col items-center gap-5 mt-10 text-white sm:w-[100vw]">

        <div className="bg-[url('/problem-img.jpg')] bg-cover bg-center bg-no-repeat sm:w-full ">
          <div className="flex flex-col gap-2 bg-[#59760b] opacity-90 px-10 py-4 sm:justify-center sm:items-center">

            <div className="flex items-center gap-2">
              <MdReportProblem />
              <h2 className="font-bold">Le problème</h2>
            </div>

            <p className="text-sm opacity-70 mt-2">
              L'insecte cochenille se propage rapidement à travers la Tunisie, détruisant les figues de Barbarie en suçant la sève et affaiblissant des cultures entières.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <FaCircleCheck />
              <h2 className="font-bold">Notre solution</h2>
            </div>

            <p className="text-sm opacity-70 mt-2">
              Notre produit offre un moyen rapide, efficace et respectueux de l’environnement pour éliminer l’insecte cochenille qui menace les cultures de figues de Barbarie.
            </p>
            <Image src={"/package-photo.png"} width={200} height={200} className="my-4 mx-auto shadow-[0_7px_0_0_black] rounded-xl" />

          </div>

        </div>

        <a onClick={() => router.push('/our-product')}>
          <button className="rounded-full border border-black border-3 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] font-medium px-[10px] text-black act cursor-pointer hover:bg-[#4a5d0a]">
            Voir notre produit
          </button>
        </a>
      </div>

      {/* what makes cactivia special */}

      <div className="flex flex-col items-center gap-5">

        <div className="px-4 py-4 flex flex-col gap-2 mx-[10vw] mt-10">
          <h2 className="font-bold mb-2">Ce qui rend Cactivia spécial</h2>
          {specialTraitrs.map((trait) => (
            <div key={trait.id} className="flex item-start justify-start gap-4 mx-2">
              <div className="text-2xl p-5 bg-[#d1d1d1] rounded-xl text-[#59760b]">{trait.icon}</div>
              <div>
                <h3 className="font-semibold">{trait.name}</h3>
                <p className="text-sm opacity-75">{trait.description}</p>
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
