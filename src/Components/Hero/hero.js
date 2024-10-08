import React from "react";

const Hero = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white pt-[80px] flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="flex flex-col items-center text-center">
                <div className="bg-primary flex justify-between w-full px-6 mb-16">
                    <img src="/heroImg1.png" alt="Person fixing a door" className="rounded-6xl -mt-[60px] h-[690px]" />
                    <div className="flex flex-col items-center justify-center -py-10 mt-20">
                        <div className="flex space-x-4 text-lg text-customGray mb-4 px-10">
                            <span>Maintenances</span>
                            <span>•</span>
                            <span>Repairs</span>
                            <span>•</span>
                            <span>Improvements</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-8 px-10">Need improvement or repair your home? we can help!</h1>
                        <div className="flex space-x-6 text-lg text-secondary mb-10">
                            <span className="flex items-center justify-center gap-x-3"><img src="/tick.png" alt="" className="h-3" /> Free Quotes</span>
                            <span className="flex items-center justify-center gap-x-3"><img src="/tick.png" alt="" className="h-3" />  100% Commitment-Free</span>
                        </div>
                        <button className="bg-secondary font-bold py-1 px-1.5 rounded-full flex gap-x-4 items-center">
                            <span className="ml-4 text-lg">Call Us Now</span> <img src="/call.png" alt="" className="h-10" />
                        </button>
                        <div className="flex justify-between gap-x-10 font-bold text-md text-customGray mt-32">
                            <div className="flex items-center text-left gap-x-3">
                                <img src="/verified.png" alt="verified" />
                                <span>Satisfaction <br /> Guarantee</span>
                            </div>
                            <div className="flex items-center text-left gap-x-3">
                                <img src="/available.png" alt="available" />
                                <span>24H <br /> Availability</span>
                            </div>
                            <div className="flex items-center text-left gap-x-3">
                                <img src="/location.png" alt="available" />
                                <span>Local US <br /> Professional</span>
                            </div>
                            <div className="flex items-center text-left gap-x-3">
                                <img src="/calendar.png" alt="available" />
                                <span>Flexible<br /> Appointments</span>
                            </div>
                        </div>
                    </div>
                    <img src="/heroImg2.png" alt="Person fixing a toilet" className="rounded-lg -mt-[60px] h-[690px]" />
                </div>
                <div className="bg-primary text-white w-full h-14 -mt-16 -mb-3 flex items-center justify-between">
                   <img src="DecorationL.png" alt="L-Decoration" className="w-96"/>
                   <img src="DecorationR.png" alt="R-Decoration" className="w-96"/>

                </div>
            </div>
        </div>
    )
})

export default Hero;