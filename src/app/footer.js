import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="bg-[#59760B] text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">© 2025 Cactivia. All rights reserved.</p>
                <div className="flex justify-center gap-2">
                    <p>Follow Us:</p>
                    <a href="https://www.facebook.com/profile.php?id=61575930785720" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaFacebookSquare size={24} /> </a>
                    <a href="https://www.instagram.com/cactivia_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaInstagram size={24} /> </a>
                </div>
            </div>
        </footer>
    );
}