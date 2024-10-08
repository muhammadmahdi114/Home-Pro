import React from "react";

function Footer() {
    return (
        <div className="bg-secondary text-white pt-10 space-y-10 px-48">
            <div className="flex justify-between items-center p-5 rounded-3xl bg-[#4AC9FF]">
                <div className="space-y-2">
                    <h3 className="font-bold text-lg">Stay Connected with Our Newsletter</h3>
                    <p>Subscribe to our newsletter to get more news, promo, or news services</p>
                </div>
                <div className="flex items-center bg-white border rounded-3xl overflow-hidden px-2">
                    <input
                        className="rounded-l-3xl p-4 px-4 w-full"
                        placeholder="Enter email address"
                    />
                    <button className="bg-secondary font-bold p-2 px-7 rounded-3xl">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="space-y-8">
                    <img src="/white_logo.png" alt="Home Pro" />
                    <p>Home Pro is your premier destination for top-notch smart home service and repair.</p>
                    <div className="flex flex:col space-x-6">
                        <img src="/youtube.png" alt="Youtube" />
                        <img src="/instagram.png" alt="Instagram " />
                        <img src="/facebook.png" alt="Facebook" />
                        <img src="/twitter.png" alt="Twitter" />
                        <img src="/mail.png" alt="Mail" />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-x-20">
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li className="text-lg">About Us</li>
                            <li className="text-lg">Services</li>
                            <li className="text-lg">Our Blog</li>
                            <li className="text-lg">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li className="text-lg">Terms</li>
                            <li className="text-lg">Privacy</li>
                            <li className="text-lg">Cookies</li>
                            <li className="text-lg">Licenses</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-screen -mx-48">
                <div className="border-t-2 flex justify-center items-center h-20">
                    <p className="text-sm font-light">©2023 HomePro . All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;