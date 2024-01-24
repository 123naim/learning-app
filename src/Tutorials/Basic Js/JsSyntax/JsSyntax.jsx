import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const JsSyntax = () => {

    return (
        <div className="grid grid-cols-5">
            <div className="col-span-4 bg-gray-100 overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Syntax</h2>
                        <div className="flex justify-between ml-9 mr-9 my-7">
                            <button className="flex items-center bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]"><MdArrowBackIos /> Previous</button>
                            <button className="flex items-center gap-1 bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]">Next   <MdArrowForwardIos /> </button>
                        </div>
                    </div>
                    <div className="bg-[#d9eee1] px-9 py-12">
                        <h2 className="text-[19px] pb-4">JavaScript syntax is the set of rules, how JavaScript programs are constructed:</h2>
                        <div className="bg-white border-2 py-3 px-4 text-[19px]">
                            <h4 className="text-[#1b8637] tracking-wide">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;create &nbsp;variables:</h4>
                            <div>
                                <div className="font-medium">
                                    <p><span className="text-[#3852c9]">var &nbsp;</span> x ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> y ;</p>
                                </div>

                                <h4 className="text-[#1b8637] tracking-wide mt-6">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;use &nbsp;variables:</h4>

                                <div className="font-medium">
                                    <p>x &nbsp;=&nbsp; <span className="text-red-600">5</span> ;</p>
                                    <p>y &nbsp;=&nbsp; <span className="text-red-600">6</span> ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> z &nbsp;=&nbsp; x &nbsp;+&nbsp; y ;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 name='values' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Values</h2>
                    </div>
                    <div className="bg-[#d9eee1] px-9 py-12">
                        <h2 className="text-[19px] pb-4">JavaScript syntax is the set of rules, how JavaScript programs are constructed:</h2>
                        <div className="bg-white border-2 py-3 px-4 text-[19px]">
                            <h4 className="text-[#1b8637] tracking-wide">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;create &nbsp;variables:</h4>
                            <div>
                                <div className="font-medium">
                                    <p><span className="text-[#3852c9]">var &nbsp;</span> x ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> y ;</p>
                                </div>

                                <h4 className="text-[#1b8637] tracking-wide mt-6">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;use &nbsp;variables:</h4>

                                <div className="font-medium">
                                    <p>x &nbsp;=&nbsp; <span className="text-red-600">5</span> ;</p>
                                    <p>y &nbsp;=&nbsp; <span className="text-red-600">6</span> ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> z &nbsp;=&nbsp; x &nbsp;+&nbsp; y ;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 name='variables' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Variables</h2>
                    </div>
                    <div className="bg-[#d9eee1] px-9 py-12">
                        <h2 className="text-[19px] pb-4">JavaScript syntax is the set of rules, how JavaScript programs are constructed:</h2>
                        <div className="bg-white border-2 py-3 px-4 text-[19px]">
                            <h4 className="text-[#1b8637] tracking-wide">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;create &nbsp;variables:</h4>
                            <div>
                                <div className="font-medium">
                                    <p><span className="text-[#3852c9]">var &nbsp;</span> x ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> y ;</p>
                                </div>

                                <h4 className="text-[#1b8637] tracking-wide mt-6">&#47;&#47;  &nbsp;&nbsp;How &nbsp;to &nbsp;use &nbsp;variables:</h4>

                                <div className="font-medium">
                                    <p>x &nbsp;=&nbsp; <span className="text-red-600">5</span> ;</p>
                                    <p>y &nbsp;=&nbsp; <span className="text-red-600">6</span> ;</p>
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> z &nbsp;=&nbsp; x &nbsp;+&nbsp; y ;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default JsSyntax;