import React, { useState, useRef, useEffect } from "react";

function NavBar({ HeroRef, AboutRef, ServicesRef, BlogRef, ContactRef, active, setActive }) {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);

    const scrollToHero = (ref, Hero) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Hero);
    };

    const scrollToAbout = (ref, About) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(About);
    };

    const scrollToServices = (ref, Services) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Services);
    };

    const scrollToBlog = (ref, Blog) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Blog);
    };

    const scrollToContact = (ref, Contact) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActive(Contact);
    };

    const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    return (
        <div className="w-screen z-10 h-[80px] bg-primary flex items-center justify-between lg:px-24 px-5 header fixed">
            <img
                src="logo.png"
                alt=""
                className="cursor-pointer"
                onClick={() => scrollToHero(HeroRef, "Hero")}
            />

            <div className="hidden lg:flex gap-x-8 font-bold">
                <button onClick={() => scrollToAbout(AboutRef, "About")}>About</button>
                <button onClick={() => scrollToServices(ServicesRef, "Services")}>Services</button>
                <button onClick={() => scrollToBlog(BlogRef, "Blog")}>Our Blog</button>
                <button onClick={() => scrollToContact(ContactRef, "Contact")}>Contact</button>
            </div>

            <div className="hidden sm:flex items-center justify-center gap-2 font-bold">
                <img src="redCircle.png" alt="" className="h-3" />
                <span>24 Hour Services</span>
            </div>

            <button onClick={() => setMenu(true)} className="lg:hidden">
                <img src="/menu.png" alt="Menu" className="h-6" />
            </button>

            {menu && (
                <div className="lg:hidden fixed right-0 top-0 w-3/4 bg-primary z-20 h-screen pt-2">
                    <div className="flex justify-between items-center py-4 mx-4">
                        <button
                            className="text-lg font-bold"
                            onClick={() => {
                                scrollToHero(HeroRef, "Hero");
                                setMenu(false);
                            }}
                        >
                            <img src="logo.png" alt="HomePro" />
                        </button>
                        <button onClick={() => setMenu(false)}>
                            <img src="/cross.png" alt="Close Menu" />
                        </button>
                    </div>
                    <div className="flex flex-col border-t border-blue-800 pt-8 py-4 justify-between h-screen">
                        <div className="flex flex-col text-lg font-bold space-y-14">
                            <button
                                onClick={() => {
                                    scrollToAbout(AboutRef, "About");
                                    setMenu(false);
                                }}
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => {
                                    scrollToServices(ServicesRef, "Services");
                                    setMenu(false);
                                }}
                            >
                                Services
                            </button>
                            <button
                                onClick={() => {
                                    scrollToBlog(BlogRef, "Blog");
                                    setMenu(false);
                                }}
                            >
                                Our Blog
                            </button>
                            <button
                                onClick={() => {
                                    scrollToContact(ContactRef, "Contact");
                                    setMenu(false);
                                }}
                            >
                                Contact
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-2 font-bold pb-32">
                            <img src="redCircle.png" alt="" className="h-3" />
                            <span>24 Hour Services</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
