import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const JsFunction = () => {
    return (
        <div className="grid grid-cols-5">
            {/* Main Content */}
            <div className="col-span-4 bg-white overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Function</h2>
                            <div className="flex justify-between ml-9 mr-9 my-7">
                                <button className="flex items-center bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]"><MdArrowBackIos /> Previous</button>
                                <button className="flex items-center gap-1 bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]">Next   <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                        <div className="bg-[#e7e9eb] px-9 pt-4 pb-6">
                            <h2 className="text-[28px] font-bold pb-4">Defination</h2>
                            <div className="bg-white border-l-4 border-[#04aa6d] py-3 px-4 text-[19px]">
                                <div>
                                    <div className="font-medium">
                                        <h2>What is JavaScript Function ?</h2>
                                        <p className="font-normal text-[17px] mt-3 pl-4 leading-7">
                                            A JavaScript function is a reusable block of code that performs a specific task when called. It allows you to encapsulate a set of instructions into a single unit, which can then be executed multiple times with different inputs. Functions in JavaScript can be declared using the function keyword and can accept parameters, perform operations, and return values. They are essential for organizing and modularizing code in JavaScript applications.
                                        </p>
                                        <p className="pl-4 mt-5 text-[#04aa6d] font-semibold">বাংলা অনুবাদ</p>
                                        <p className="font-normal text-[17px] mt-3 pl-4 leading-7">

                                            JavaScript ফাংশন হলো একটি পুনরায় ব্যবহৃত কোড ব্লক, যা নির্দিষ্ট কোনো কাজ সম্পাদন করে যখন তা কল করা হয়। এটি আপনাকে একটি কোড সেটকে একক একক ইউনিটে সংগ্রহ করতে দেয়, যা পরে পুনরায় বিভিন্ন ইনপুটের সাথে ব্যাবহার করা যেতে পারে। JavaScript ফাংশন ডিফাইন করা যায় function কীওয়ার্ড ব্যবহার করে এবং এটি প্যারামিটার গ্রহণ করতে পারে, প্রক্রিয়া সম্পাদন করতে পারে, এবং মান রিটার্ন করতে পারে। এটি JavaScript অ্যাপ্লিকেশনগুলিতে কোড সংগঠন এবং মডিউলারাইজেশনের জন্য অত্যন্ত গুরুত্বপূর্ণ।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* On This Page */}
            <div className="col-span-1 bg-gray-100 overflow-y-scroll h-[490px]">
                <h3 className="text-2xl p-4">On this Page</h3>
                <div>
                    <ul className="-mt-2">
                        <li className="bg-gray-100 font-semibold px-4 py-1">JavaScript Syntax</li>
                        <li className="bg-white px-4 py-1">JavaScript Values</li>
                        <li className="bg-gray-100 px-4 py-1">JavaScript Variables</li>
                        <li className="bg-white px-4 py-1">JavaScript Operator</li>
                        <li className="bg-gray-100 px-4 py-1">JavaScript Expression</li>
                        <li className="bg-white px-4 py-1">JavaScript Comments</li>
                        <li className="bg-gray-100 px-4 py-1">JS Identifiers / Names</li>
                        <li className="bg-white px-4 py-1">JS Case Sensitive</li>
                        <li className="bg-gray-100 px-4 py-1">JS & Camel Case</li>
                        <li className="bg-white px-4 py-1">JS Character Set</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JsFunction;