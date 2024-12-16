'use client'

import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 font-[poppins,sans-serif]">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Get in touch</h2>
                <p className="text-gray-600 text-sm text-center mb-6">
                    Interested in discovering how a partnership with No Meat Factory can elevate your offerings?
                </p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white font-semibold text-sm uppercase rounded-full py-2 px-4 shadow-md transition-all"
                            style={{ backgroundColor: '#014450' }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00303a')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#014450')}
                        >
                            Let's Talk!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
