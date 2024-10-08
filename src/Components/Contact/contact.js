import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className="bg-white mt-[80px]">

                <div className="bg-primary mt-[80px]">
                    <img
                        src="/contact_decorationT.png"
                        alt="Decoration"
                        className="ml-48 w-96"
                    />
                    <div className="flex items-center justify-between gap-x-10">
                        <div className="pl-48">
                            <h1 className="text-5xl text-white font-bold leading-tight">Already to improve or repair your home? Let’s Talk! </h1>
                            <div className="flex space-x-6 text-md text-secondary my-7">
                                <span className="flex items-center justify-center gap-x-3"><img src="/tick.png" alt="" className="h-3" /> Free Quotes</span>
                                <span className="flex items-center justify-center gap-x-3"><img src="/tick.png" alt="" className="h-3" />  100% Commitment-Free</span>
                            </div>
                            <button className="bg-secondary font-bold py-1 px-1.5 rounded-full flex gap-x-4 items-center">
                                <span className="ml-4 text-lg">Call Us Now</span> <img src="/call.png" alt="" className="h-10" />
                            </button>
                        </div>
                        <div>
                            <img src="/contact.png" alt="Contact" className="lg:w-[1600px]" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
})

export default Contact;