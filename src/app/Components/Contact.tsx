import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-[poppins,sans-serif]">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Get in touch</h2>
                <form>
                    <div className="flex flex-col md:flex-row md:gap-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0">
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
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold text-sm uppercase rounded-full py-2 px-4 shadow-md hover:bg-green-700 transition-all"
                    >
                        Let's Talk!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
