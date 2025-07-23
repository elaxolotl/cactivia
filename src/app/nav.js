"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-99 h-[10vw] sm:h-[10vh] py-6 sm:py-10 bg-white/20 backdrop-blur-md shadow-md border-b border-black/10">
      <div className="container mx-auto flex justify-between sm:justify-around items-center mt-[-3vh]">

        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-black ml-4">
          <Image src="/logo.png" alt="cactivia logo" width={100} height={100} />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-8 bg-[#52030C] mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-8 bg-[#52030C] mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-8 bg-[#52030C] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Menu */}
        <ul
          className={`flex space-x-6 sm:flex ${menuOpen
              ? "flex flex-col absolute top-[20vw] left-[50%] rounded-xl z-50 gap-7 px-4 py-6 bg-white/20 backdrop-blur-md shadow-sm"
              : "hidden"
            } sm:static sm:flex-row sm:bg-transparent sm:space-x-6`}
        >
          <li>
            <Link href="/" className="text-white rounded-full border border-black border-2 shadow-[0_5px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/our-product" className="text-white rounded-full border border-black border-2 shadow-[0_5px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
              Notre produit
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="text-white rounded-full border border-black border-2 shadow-[0_5px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
              À propos de nous
            </Link>
          </li>
          <li>
            <Link href="#contact"
              scroll={true} className="text-white rounded-full border border-black border-2 shadow-[0_5px_0_0_black] transition-colors bg-[#59760b] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
              Contactez-nous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}