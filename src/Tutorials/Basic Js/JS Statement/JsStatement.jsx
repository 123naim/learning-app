import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const JsStatement = () => {
    return (
        <div className="grid grid-cols-5">
            {/* Main Content */}
            <div className="col-span-4 bg-white overflow-y-scroll h-[490px]">
                <div>
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Statements</h2>
                            <div className="flex justify-between ml-9 mr-9 my-7">
                                <button className="flex items-center bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]"><MdArrowBackIos /> Previous</button>
                                <button className="flex items-center gap-1 bg-[#04aa6d] px-4 py-2 rounded-md text-white font-medium text-[18px]">Next   <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                        <div className="bg-[#e7e9eb] px-9 pt-4 pb-6">
                            <h2 className="text-[22px] font-normal pb-4">Example</h2>
                            <div className="bg-white border-l-4 border-[#04aa6d] py-3 px-4 text-[19px]">
                                <div>
                                    <div className="font-medium">
                                        <p><span className="text-[#3852c9]">let &nbsp;</span> x,&nbsp; y,&nbsp; z ; &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Statement 1</span></p>
                                        <p>x &nbsp;=&nbsp; <span className="text-red-600">5</span> ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Statement 2</span></p>
                                        <p>y &nbsp;=&nbsp; <span className="text-red-600">6</span> ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Statement 3</span></p>
                                        <p> z &nbsp;=&nbsp; x &nbsp;+&nbsp; y ; &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Statement 4</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-7 mx-2" />
                    <div>
                        <div className="mb-5">
                            <h2 name='syntax' className="text-4xl tracking-wide mt-7 ml-9  font-normal">JavaScript Programs</h2>
                            <p className="mt-5 ml-9 text-[18px] leading-10">A <span className="font-bold">computer programs</span> is a list of &quot;instructions&quot; to be &quot;executed&quot; by a computer. <br />

                                In a programming language, these programming instructions are called <span className="font-bold">statements</span>. <br />

                                A <span className="font-bold">JavaScript program</span> is a list of programming <span className="font-bold">statements</span>.</p>
                        </div>
                        <div className="p-9 bg-[#ffffcc] m-2 ">
                            In HTML, JavaScript programs are executed by the web browser.
                        </div>
                    </div>
                    <hr className="my-8 mx-2" />
                    <div>
                        <div>
                            <h2 name='syntax' className="text-[40px] tracking-wide mt-7 ml-9  font-normal">JavaScript Statements</h2>
                            <p className="leading-10 pl-9">
                                JavaScript statements are composed of: <br />

                                Values, Operators, Expressions, Keywords, and Comments. <br />

                                This statement tells the browser to write &quot;Hello Dolly.&quot; inside an HTML element with id=&quot;demo&quot;:
                            </p>
                        </div>
                        <div className="bg-[#e7e9eb] px-9 pt-4 pb-6 mt-4">
                            <h2 className="text-[22px] font-normal pb-4">Example</h2>
                            <div className="bg-white border-l-4 border-[#04aa6d] py-3 px-4 text-[17px]">
                                <div className="">
                                    <p className="text-[16px]">document . getElementById ( <span className="text-red-500">&quot;demo&quot;</span> ) . innerHTML = <span className="text-red-500">&quot;Hello Dolly&quot;</span>;</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="flex items-center gap-1 bg-[#04aa6d] px-3 py-[6px] rounded-md text-white font-medium text-[16px]">try it youself   <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                        <div className="mt-5 mb-3">
                            <p className="leading-10 pl-9">
                                Most JavaScript programs contain many JavaScript statements. <br />

                                The statements are executed, one by one, in the same order as they are written.
                            </p>
                        </div>
                        <div className="p-9 bg-[#ffffcc] m-2 ">
                            JavaScript programs (and JavaScript statements) are often called JavaScript code.
                        </div>
                    </div>
                    <hr className="my-8 mx-2" />
                    <div>
                        <div className='-mt-2'>
                            <h2 name='syntax' className="text-4xl tracking-wide mt-7 ml-9  font-normal">SemiColon ;</h2>
                            <p className="mt-5 ml-9 text-[18px] leading-10">Semicolons separate JavaScript statements.
                                <br />
                                Add a semicolon at the end of each executable statement:
                            </p>
                        </div>
                        <div className="bg-[#e7e9eb] px-9 pt-4 pb-6 mt-4">
                            <h2 className="text-[22px] font-normal pb-4">Example</h2>
                            <div className="bg-white border-l-4 border-[#04aa6d] py-3 px-4 text-[17px]">
                                <div className="">
                                    <p><span className="text-[#3852c9]">let &nbsp;</span> a,&nbsp; b,&nbsp; c ; &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Declare 3 variables</span></p>
                                    <p>a &nbsp;=&nbsp; <span className="text-red-600">5</span> ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Assign the value 5 to a</span></p>
                                    <p>b &nbsp;=&nbsp; <span className="text-red-600">6</span> ; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Assign the value 6 to b</span></p>
                                    <p> c &nbsp;=&nbsp; x &nbsp;+&nbsp; y ; &nbsp;&nbsp;&nbsp;&nbsp; <span className="text-[#1b8637] tracking-wide font-normal text-[16px]">&#47;&#47;&nbsp; Assign the sum of a and b to c</span></p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="flex items-center gap-1 bg-[#04aa6d] px-3 py-[6px] rounded-md text-white font-medium text-[16px]">try it youself   <MdArrowForwardIos /> </button>
                            </div>
                        </div>
                    </div>
                    <div>

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

export default JsStatement;