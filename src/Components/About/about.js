import React from "react";

const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white h-screen pt-[90px] lg:-mb-28">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-x-20 lg:px-48 lg:mt-14">
                <div className="w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0">
                    <img src="/About.png" alt="About" className="mx-auto w-4/5 lg:w-full" />
                </div>

                <div className="w-full lg:w-1/2 text-left px-6">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-black">Professional for your home services</h1>
                    <p className="text-[#545971] mb-5">You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services</p>

                    <div className="text-[#1F3584] lg:justify-start">
                        <div className="grid grid-cols-1 font-bold sm:grid-cols-2 gap-4 my-8">
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Repair and Installation</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Plumbing</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Maintenance</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Budget-friendly</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Home Security Services</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/primaryTick.png" alt="Tick" />
                                <span>Eco-friendly solutions</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start">
                            <button className="bg-secondary text-white border rounded-3xl py-3 lg:px-5 px-10 lg:mr-24 mx-5 lg:mx-0 text-left">
                                <span>We already 24 hours fast services to help you. You can contact us at</span>
                                <span className="underline font-bold text-lg"> (888) 617-5894 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default About;