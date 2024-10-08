import React, { useState } from "react";

const Services = React.forwardRef((props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        { icon: '/plumbing.png', title: 'Plumbing services', description: 'Drain pipe leaking, pipe clogged, replace the pipe line' },
        { icon: '/roofing.png', title: 'Roofing repair', description: 'Roof leaks, tile replacement, roof cleaning and maintenance' },
        { icon: '/mold.png', title: 'Mold Removal', description: 'Removing and cleaning mildew, Restoration and Prevention' },
        { icon: '/tree.png', title: 'Tree Trimming', description: 'Trimming and cleaning, Deadwood removal, Tree shaping' },
        { icon: '/appliance.png', title: 'Appliance Repair', description: 'Repair of washing machines, refrigerators, Air conditioner, etc' },
        { icon: '/bathroom.png', title: 'Bathroom Remodeling', description: 'Design and Consulting, installation, Repairing, tile repair' },
        { icon: '/locksmith.png', title: 'Locksmith', description: 'Lock Installation and Repair, Duplication, Lock Rekeying' },
    ];

    const perks = [
        {
            icon: "/satisfaction.png",
            title: "Satisfaction Guarantee",
            description: "You don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
        },
        {
            icon: "/quotes.png",
            title: "Free Quotes",
            description: "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service."
        },
        {
            icon: "/local.png",
            title: "Local Professionals",
            description: "Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance"
        },
        {
            icon: "/24hservice.png",
            title: "Fast 24-Hour Service",
            description: "need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem"
        },
        {
            icon: "/appointment.png",
            title: "Flexible Appointments",
            description: "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week."
        },
        {
            icon: "/commitmentfree.png",
            title: "100% Commitment-Free",
            description: "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease"
        }
    ];

    const reviews = [
        {
            name: 'Kende Attila',
            profilePic: '/Kende-Attila.jpeg',
            stars: 4,
            review: 'Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.',
        },
        {
            name: 'John Doe',
            profilePic: '/John-Doe.jpeg',
            stars: 5,
            review: 'Amazing service! The HomePro team was professional and quick. My home is now safer and more secure.',
        },
        {
            name: 'Jane Smith',
            profilePic: '/Jane-Smith.jpeg',
            stars: 3,
            review: 'Good experience overall, but there were a few delays in scheduling the service.',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div>
            <div ref={ref} className="container mx-auto px-48 py-16 text-black pt-[120px]">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="text-gray-500 mt-4 px-80">You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start justify-start text-start">
                            <div className="bg-primary text-white rounded-full w-16 h-16  mb-4">
                                <img src={`${service.icon}`} alt={service.title} className="text-2xl" />
                            </div>
                            <h2 className="text-lg font-semibold">{service.title}</h2>
                            <p className="text-gray-500 mt-2">{service.description}</p>
                        </div>
                    ))}
                    <div className="bg-secondary text-white rounded-lg p-6 text-center flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">More service?</h2>
                        <p className="mt-2">You can tell us what you need and we can help!</p>
                        <button className="bg-white text-secondary rounded-full px-4 py-2 mt-4 font-semibold">Call Us Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-primary text-white py-10 px-24 rounded-lg mt-10 mx-20 relative">
                <img src="/perks_decorationL.png" alt="perks_decorationL" className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-96" />
                <img src="/perks_decorationR.png" alt="perks_decorationR" className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-96" />

                <div className="flex justify-between items-end">
                    <h1 className="text-5xl font-bold">Fast, Friendly, and Satisfaction Guarantee</h1>
                    <p className="text-customGray w-3/4">No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.</p>
                </div>

                <img src="/perksDivider.png" alt="divider" className="my-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {perks.map((perk, index) => (
                        <div key={index} className="flex items-start">
                            <img src={`${perk.icon}`} alt={perk.title} className="h-20 mr-4" />
                            <div className="flex flex-col gap-y-2">
                                <h2 className="text-lg font-semibold">{perk.title}</h2>
                                <p className="text-customGray text-sm">{perk.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center bg-white text-black py-10 lg:py-20 px-5 lg:px-28">
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
                    <img
                        src="/working.png"
                        alt="HomePro Worker"
                        className="rounded-xl object-cover"
                    />
                </div>

                <div className="w-full flex flex-col gap-y-14 lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
                    <h2 className="text-4xl lg:text-5xl font-bold">How HomePro<br />works?</h2>

                    <div className="space-y-10">
                        <div className="flex items-start">
                            <div className="text-6xl font-bold text-customGray mr-4">1.</div>
                            <div className="flex pl-3 gap-x-1">
                                <h3 className="text-lg font-semibold w-80">Call us anytime 24/7</h3>
                                <p className="text-gray-500 ml-8">
                                    You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-start">

                                <div className="text-6xl font-bold text-customGray mr-4">2.</div>
                                <div className="flex gap-x-1">
                                    <h3 className="text-lg font-semibold w-80">Schedule Service</h3>
                                    <p className="text-gray-500 ml-8">
                                        After connecting your call, our home care experts will answer your questions and provide flexible appointment times.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-start">

                                <div className="text-6xl font-bold text-customGray mr-4">3.</div>
                                <div className="flex gap-x-1">
                                    <h3 className="text-lg font-semibold w-96">Your request is completed</h3>
                                    <p className="text-gray-500 ml-8">
                                        Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-white text-black rounded-lg shadow-md space-y-10">
                <h1 className="text-5xl text-center font-bold mb-6 leading-tight">Here our original reviews<br /> from trusted platform</h1>
                <img src="/trustpilot.png" alt="Trustpilot" className="mb-4" />

                <div className="flex items-center justify-center px-48 w-full">
                    <button onClick={handlePrev} className="p-3 mb-20 bg-gray-100 text-white rounded-full hover:bg-secondary">
                        <img src="/arrow-Left.png" alt="Left Arrow" />
                    </button>

                    <div className="w-[986px] h-[250px] px-[129px] py-[40px] mx-4 text-center">
                        <p className="text-lg h-32 text-gray-600">{reviews[currentIndex].review}</p>
                        <div className="flex items-center justify-center mt-4">
                            <img src={reviews[currentIndex].profilePic} alt={reviews[currentIndex].name} className="w-16 h-16 rounded-full" />
                            <div className="ml-4 text-start">
                                <h3 className="text-lg font-bold">{reviews[currentIndex].name}</h3>
                                <div className="flex text-3xl font-bold">
                                    {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                                        <span key={i} className="text-star">★</span>
                                    ))}
                                    {[...Array(5 - reviews[currentIndex].stars)].map((_, i) => (
                                        <span key={i} className="text-gray-300">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleNext} className="p-3  mb-20 text-lg font-bold bg-gray-100 text-white rounded-full hover:bg-secondary">
                        <img src="/arrow-Right.png" alt="Right Arrow" />
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-secondary w-9' : 'bg-gray-300'} transition-all duration-500`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
})

export default Services;