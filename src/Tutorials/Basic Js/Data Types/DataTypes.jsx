import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const DataTypes = () => {
    return (
        <div className="grid grid-cols-5">
            {/* Main Content */}
            <div className="col-span-4 bg-white overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript DataTypes</h2>
                            <div className="flex justify-between ml-9 mr-9 my-7">
                                <button className="flex items-center bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]"><MdArrowBackIos /> Previous</button>
                                <button className="flex items-center gap-1 bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]">Next   <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                        <div className="bg-[#e7e9eb] px-9 pt-4 pb-6">
                            <h2 className="text-[28px] font-bold pb-4">Defination</h2>
                            <div className="bg-white rounded-r-lg border-l-4 border-[#04aa6d] py-3 px-4 text-[19px]">
                                <div>
                                    <div className="font-medium">
                                        <h2>What is JavaScript Data Types ?</h2>
                                        <p className="font-normal text-[17px] mt-3 pl-4">
                                            JavaScript has several data types, including:
                                        </p>
                                        <h3 className="font-bold text-[18px] mt-3 pl-4">1. &nbsp;Primitive Data Types:</h3>
                                        <ul className="list-disc list-outside pl-16 leading-9">
                                            <li className="font-normal">
                                                <span className="font-semibold">Number:</span> Represents numeric values, both integers and floating-point numbers.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">String:</span>  Represents textual data, enclosed within single or double quotes.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Boolean:</span>  Represents a logical value indicating true or false.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Undefined:</span> Represents a variable that has been declared but not assigned a value.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Null:</span> Represents the intentional absence of any object value.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Symbol:</span> ntroduced in ECMAScript 6, represents unique identifiers.
                                            </li>
                                        </ul>
                                        <h3 className="font-bold text-[18px] mt-5 pl-4">1. &nbsp;Complex Data Types:</h3>
                                        <ul className="list-disc list-outside pl-16">
                                            <li className="font-normal">
                                                <span className="font-semibold">Object:</span> Represents a collection of key-value pairs, also known as properties or attributes.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Array:</span>  Represents a collection of elements, each identified by an index starting from 0.
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">Function:</span>   Represents a reusable block of code that performs a specific task when called.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="font-medium mt-9">
                                        <p className="pl-4 text-[#04aa6d] font-semibold">বাংলা অনুবাদ</p>
                                        <p className="font-normal text-[17px] mt-3 pl-4">
                                            JavaScript এর ডেটা টাইপগুলি হলো:
                                        </p>
                                        <h3 className="font-bold text-[18px] mt-3 pl-4">1. &nbsp;প্রাথমিক ডেটা টাইপগুলি (Primitive Data Types):</h3>
                                        <ul className="list-disc list-outside pl-16 leading-9">
                                            <li className="font-normal">
                                                <span className="font-semibold">সংখ্যা (Number):</span> পূর্ণসংখ্যা এবং দশমিক সংখ্যা উভয়ই প্রকাশ করতে ব্যবহৃত হয়।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">স্ট্রিং (String):</span>  টেক্সটুয়াল ডেটা বা ক্যারেক্টারের সমষ্টি প্রকাশ করে।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">বুলিয়ান (Boolean):</span>  সত্য বা মিথ্যা অবস্থান প্রকাশ করে।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">অবিচ্ছিন্ন (Undefined):</span> ডেটা অথবা ভেরিয়েবল যেটি ডিফাইন করা হয়নি সেই অবস্থানটি প্রকাশ করে।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">শূন্য (Null):</span> কোনো ডেটা না থাকলে শূন্য অবস্থা প্রকাশ করে।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">সিম্বল (Symbol):</span> ইক্যামাস্ক্রিপ্ট ৬ এ যোগ করা হয়েছে, অদ্বিতীয় পরিচিতিতে ব্যবহৃত হয়।
                                            </li>
                                        </ul>
                                        <h3 className="font-bold text-[18px] mt-5 pl-4">1. &nbsp;সংযুক্ত ডেটা টাইপগুলি (Complex Data Types):</h3>
                                        <ul className="list-disc list-outside pl-16 leading-9">
                                            <li className="font-normal">
                                                <span className="font-semibold">অবজেক্ট (Object):</span> কী-মান জোড়া হিসাবে প্রকাশিত ডেটা সমষ্টি।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">অ্যারে (Array):</span>  উপাদান সংগ্রহ প্রকাশ করে, প্রতিটি উপাদান একটি ইনডেক্স দ্বারা চিহ্নিত করা হয়।
                                            </li>
                                            <li className="font-normal">
                                                <span className="font-semibold">ফাংশন (Function):</span>   একটি নির্দিষ্ট কাজ সম্পাদনের জন্য একটি পুনরায় ব্যবহৃত ব্লক কোড।
                                            </li>
                                        </ul>
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

export default DataTypes;