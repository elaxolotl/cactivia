export default function Contact() {
    return (
        <div className="bg-[#59760b] p-4 mt-5">
            <div className="flex flex-col m-4 bg-white rounded-xl gap-2 p-4 sm:mx-[30vw]">
                <h3 className="font-bold">Contactez-nous</h3>
                <input type="text" className="bg-[#D9D9D9] px-2 rounded-lg" placeholder="Nom" />
                <input type="email" className="bg-[#D9D9D9] px-2 rounded-lg" placeholder="Email" />
                <textarea className="bg-[#D9D9D9] px-2 rounded-lg" placeholder="Message..." rows="4" />
                <button className="bg-[#52030C] text-white rounded-lg px-4 py-2 mt-2 shadow-[0_5px_0_0_black] hover:bg-[#59760b] transition-colors cursor-pointer" type="submit">
                    Envoyer le message
                </button>
            </div>
        </div>
    );
}