import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className="bg-white mt-[80px] ">

                <div className="bg-primary lg:mt-[80px] lg:px-0 px-6">
                    <img
                        src="/contact_decorationT.png"
                        alt="Decoration"
                        className="lg:ml-48 ml-14 lg:w-96 w-64"
                    />
                    <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:text-start text-center gap-x-10 lg:mt-0 mt-10">
                        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center lg:pl-48 space-y-10">
                            <h1 className="lg:text-5xl text-4xl text-white font-bold leading-tight">Already to improve or repair your home? Let’s Talk! </h1>
                            <div className="flex lg:space-x-6 space-x-6 text-md text-secondary my-7">
                                <span className="flex items-center justify-center gap-x-2"><img src="/tick.png" alt="" className="h-3" /> Free Quotes</span>
                                <span className="flex items-center justify-center gap-x-2"><img src="/tick.png" alt="" className="h-3" />  100% Commitment-Free</span>
                            </div>
                            <button className="bg-secondary font-bold py-1 px-1.5 rounded-full flex gap-x-4 justify-center items-center">
                                <span className="ml-4 text-lg">Call Us Now</span> <img src="/call.png" alt="Call US" className="h-10" />
                            </button>
                        </div>
                        <div>
                            <img src="/contact.png" alt="Contact" className="lg:w-[1600px] hidden lg:block md:block" />
                            <img src="/contactSM.png" alt="Contact" className="lg:w-[1600px] mt-10 lg:hidden md:hidden" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
})

export default Contact;