import React from "react";

const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white h-screen pt-[80px]">
            <div className="flex justify-center items-center gap-x-20 px-60 mt-14">
                <div className="w-full">
                    <h1 className="text-4xl font-bold mb-5 text-black">Professional for your home services</h1>
                    <p className="text-[#545971]">You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services</p>
                    <div className="text-[#1F3584]">
                        <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Repair and Installation</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Plumbing</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Maintenance</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Budget-friendly</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Home Security Services</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Eco-friendly solutions</span>
                            </div>
                        </div>
                        <button className="bg-secondary text-white border rounded-3xl py-3 px-5">We already 24 hours fast services to help you. <br /> You can contact us at <span className="underline font-bold text-lg"> (888) 617-5894 </span></button>
                    </div>
                </div>
                <div className="w-full">
                    <img src="/About.png" alt="About" />
                </div>

            </div>
        </div>
    );
})

export default About;