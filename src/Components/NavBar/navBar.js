import React from "react";

function NavBar({ HeroRef, AboutRef, ServicesRef, BlogRef, ContactRef, active, setActive }) {

    const scrollToHero = (ref, Hero) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Hero)
    };

    const scrollToAbout = (ref, About) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(About)
    };

    const scrollToServices = (ref, Services) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Services)
    };

    const scrollToBlog = (ref, Blog) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Blog)
    };

    const scrollToContact = (ref, Contact) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Contact)
    };

    return (
        <div className="w-screen z-10 h-[80px] bg-primary flex items-center justify-between px-24 header fixed">
            <img src="logo.png" alt="" onClick={() => scrollToHero(HeroRef, "Hero")} />
            <div className="flex gap-x-8 font-bold">
                <button onClick={() => scrollToAbout(AboutRef, "About")}
                >
                    About
                </button>
                <button onClick={() => scrollToServices(ServicesRef, "Services")}
                >
                    Services
                </button>
                <button onClick={() => scrollToBlog(BlogRef, "Blog")}
                >
                    Our Blog
                </button>
                <button onClick={() => scrollToContact(ContactRef, "Contact")}
                >
                    Contact
                </button>
            </div>
            <div className="flex items-center justify-center gap-2 font-bold">
                <img src="redCircle.png" alt="" className="h-3" />
                <span>24 Hour Services</span>
            </div>
        </div>
    )
}

export default NavBar;