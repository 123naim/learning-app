import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const JsOperators = () => {
    return (
        <div className="grid grid-cols-5">
            {/* Main Content */}
            <div className="col-span-4 bg-white overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Operators</h2>
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
                                        <h2>What is JavaScript Operators ?</h2>
                                        <p className="font-normal text-[17px] mt-3 pl-4 leading-7">
                                            JavaScript operators are symbols or built-in methods used to perform various operations on values, variables, or expressions. They are used to manipulate data by performing actions such as addition, subtraction, multiplication, division, comparison, etc. <br />
                                            (
                                            JavaScript অপারেটর হলো বিভিন্ন ধরণের কাজ সম্পাদনের জন্য ব্যবহৃত চিহ্ন বা মৌলিক পদ্ধতি। এগুলি ব্যবহার করে মান, ভেরিয়েবল, বা অন্যান্য মৌলিক ইউনিটগুলির মধ্যে অপারেশন করা হয়। উদাহরণস্বরূপ, যোগ, বিয়োগ, গুণ, ভাগ, তুলনা ইত্যাদি কাজ সম্পাদনের জন্য বিভিন্ন ধরণের অপারেটর ব্যবহার করা হয়।)

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

export default JsOperators;