import React, { useState } from "react";

const Blog = React.forwardRef((props, ref) => {
    const blogs = [
        {
            date: "19 Jan 2023",
            image: "/blog1.png",
            title: "Understanding Smart Home Systems & Maintenance",
            description:
                "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
            tags: ["Plumbing", "Architecture", "Maintenance"],
        },
        {
            date: "19 Jan 2023",
            image: "/blog2.png",
            title: "The Ultimate Guide to Home Repairs and Renovations",
            description:
                "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
            tags: ["Plumbing", "Architecture", "Maintenance"],
        },
        {
            date: "19 Jan 2023",
            image: "/blog3.png",
            title: "Painting Techniques for a Kitchen Refresh",
            description:
                "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...",
            tags: ["Plumbing", "Architecture", "Maintenance"],
        },
    ];

    const faqs = [
        {
            question: "What is HomePro?",
            answer: "HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
        },
        {
            question: "Are the service providers on HomePro reliable and qualified?",
            answer: "Yes, the service providers are vetted for quality and reliability.",
        },
        {
            question: "What if I have an issue or complaint about a service provider?",
            answer: "You can file a complaint directly through our platform, and we will investigate the issue.",
        },
        {
            question: "How are payments handled on HomePro?",
            answer: "Payments are securely processed through our platform using various payment methods.",
        },
        {
            question: "How do I leave a review for a service provider?",
            answer: "After a service is completed, you can leave a review on the platform directly on the service provider's profile.",
        },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    return (
        <div ref={ref} className="bg-white text-black lg:pt-[95px] lg:-mb-[80px] lg:px-0 px-6 rounded-lg overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-8">Explore Insights in Our Blog</h2>
            <p className="text-center mb-4">
                Find lots of insights and information on our blog. Explore, learn, and get inspired today.
            </p>
            <div className="grid md:grid-cols-3 lg:px-48">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white w-96 rounded-lg p-6 mx-auto mb-6">
                        <img src={blog.image} alt={blog.title} className="w-80 h-40 object-cover rounded-lg mb-4" />
                        <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{blog.title}</h3>
                        <p className="text-gray-700 mb-4">{blog.description}</p>
                        <div className="flex flex-wrap">
                            {blog.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <a href="#more" className="text-secondary text-lg font-bold hover:underline">
                    View More &gt;
                </a>
            </div>
            <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center lg:px-48 mx-auto lg:pt-20 pt-10">
                <div className="lg:w-1/3 lg:pr-8 lg:text-start text-center">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">Frequently Asked Questions</h1>
                    <p>Still need help? <span className="text-secondary underline font-bold">Get Help Now</span></p>
                </div>
                <div className="space-y-4 lg:mt-0 mt-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg lg:w-[700px]">
                            <button
                                className={`w-full text-left p-4 ${openFaq === index ? 'bg-[#F3F5F9] pr-5' : 'bg-white'
                                    } rounded-t-lg flex justify-between items-center`}
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="text-gray-700 font-semibold">{faq.question}</span>
                                <img
                                    src={` ${openFaq === index ? 'upVector.png' : 'downVector.png'}`}
                                    alt={` ${openFaq === index ? 'upVector' : 'downVector'}`}
                                    className={` ${openFaq === index ? "w-3" : "w-5"} ml-5`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                {openFaq === index && (
                                    <div className="p-4 bg-gray-100 lg:text-sm text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Blog;
