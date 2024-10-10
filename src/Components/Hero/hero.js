import React from "react";

const Hero = React.forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="bg-white pt-[80px] flex flex-col items-center justify-center lg:min-h-screen w-screen"
        >
            <div className="flex flex-col items-center text-center">
                <div className="bg-primary flex flex-col lg:flex-row lg:justify-between w-full px-6 mb-16">
                    <img
                        src="/heroImg1.png"
                        alt="Person fixing a door"
                        className="hidden lg:block rounded-6xl -mt-[60px] lg:h-[690px] lg:w-auto w-full h-[300px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center lg:py-10  lg:mt-20">
                        <div className="flex flex-wrap justify-center space-x-4 text-sm lg:text-lg text-customGray mb-4 px-4 lg:px-10">
                            <span>Maintenances</span>
                            <span>•</span>
                            <span>Repairs</span>
                            <span>•</span>
                            <span>Improvements</span>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 px-4 lg:px-10">
                            Need improvement or repair for your home? We can help!
                        </h1>
                        <div className="flex  justify-center lg:space-x-6 text-sm lg:text-lg text-secondary mb-10 space-x-4">
                            <span className="flex items-center justify-center gap-x-3">
                                <img src="/tick.png" alt="" className="h-3" /> Free Quotes
                            </span>
                            <span className="flex items-center justify-center gap-x-3">
                                <img src="/tick.png" alt="" className="h-3" /> 100% Commitment-Free
                            </span>
                        </div>
                        <button className="bg-secondary font-bold py-2 px-3 lg:py-1 lg:px-1.5 rounded-full flex gap-x-4 items-center">
                            <span className="ml-4 text-sm lg:text-lg">Call Us Now</span>
                            <img src="/call.png" alt="" className="h-8 lg:h-10" />
                        </button>
                        <div className="grid grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-5 lg:flex lg:justify-between font-bold text-sm lg:text-md text-customGray mt-16 lg:mt-32">
                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-x-3">
                                <img src="/verified.png" alt="verified" className="mb-1" />
                                <span className="text-center lg:text-left">Satisfaction <br /> Guarantee</span>
                            </div>
                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-x-3">
                                <img src="/available.png" alt="available" className="mb-1" />
                                <span className="text-center lg:text-left">24H <br /> Availability</span>
                            </div>
                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-x-3">
                                <img src="/location.png" alt="available" className="mb-1" />
                                <span className="text-center lg:text-left">Local US <br /> Professional</span>
                            </div>
                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-x-3">
                                <img src="/calendar.png" alt="available" className="mb-1" />
                                <span className="text-center lg:text-left">Flexible<br /> Appointments</span>
                            </div>
                        </div>

                    </div>

                    <img
                        src="/heroImg2.png"
                        alt="Person fixing a toilet"
                        className="hidden lg:block rounded-lg -mt-[60px] lg:h-[690px] lg:w-auto w-full h-[300px] object-cover"
                    />
                </div>

                <div className="bg-primary text-white w-full h-14 -mt-16 -mb-3 flex items-center justify-between">
                    <img
                        src="DecorationL.png"
                        alt="L-Decoration"
                        className="-ml-80 lg:-ml-0 lg:w-96"
                    />
                    <img
                        src="DecorationR.png"
                        alt="R-Decoration"
                        className="-mr-80 lg:-mr-0 lg:w-96"
                    />
                </div>
            </div>
        </div>
    );
});

export default Hero;
