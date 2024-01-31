import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const JsVariables = () => {
    return (
        <div className="grid grid-cols-5">
            {/* Main Content */}
            <div className="col-span-4 bg-white overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Variables</h2>
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
                                        <h2>What is JavaScript Variables ?</h2>
                                        <p className="font-normal text-[17px] mt-3 pl-4 leading-7">
                                            A JavaScript variable is a named container used for storing data that may change over time. It can hold various types of data such as numbers, strings, objects, etc. <br />
                                            (
                                            JavaScript ভেরিয়েবল হলো একটি নামের ধারণা যা ডেটা সংরক্ষণের জন্য ব্যবহার করা হয়, যেখানে ডেটা পরিবর্তনশীল হতে পারে। উদাহরণস্বরূপ, সংখ্যা, স্ট্রিং, অবজেক্ট ইত্যাদি ধরণের তথ্য সংরক্ষণের জন্য ভেরিয়েবল ব্যবহৃত হতে পারে।)

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

export default JsVariables;