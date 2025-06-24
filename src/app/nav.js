import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-99 h-[10vw] py-6 bg-gradient-to-b from-[#daa547] to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold text-black">
            <Image src="/logo.png" alt="cactivia logo" width={120} height={120} />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white rounded-full border border-black border-2 shadow-[0_7px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 py-2 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
                Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white rounded-full border border-black border-2 shadow-[0_7px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 py-2 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
                Products
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white rounded-full border border-black border-2 shadow-[0_7px_0_0_black] transition-colors bg-[#52030c] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 py-2 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
                About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white rounded-full border border-black border-2 shadow-[0_7px_0_0_black] transition-colors bg-[#59760b] text-background hover:bg-[#59760b] font-large sm:text-base h-10 sm:h-12 px-4 py-2 sm:w-auto mx-auto sm:mx-0 cursor-pointer">
                Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}