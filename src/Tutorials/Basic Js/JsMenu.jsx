import { Link, NavLink } from "react-router-dom";
import './jsMenu.css'

const JsMenu = () => {
    const jsMenuLink = <>
        <Link to='/basicJs' className="text-black hover:text-black hover:bg-gray-200  pl-4 pt-[2px] pb-[2px]" > JS Introduction</Link>

        <NavLink to='/basicJs/statement' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Statement</NavLink>
        
        <NavLink to='/basicJs/syntax' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Syntax</NavLink>

        <NavLink to='/basicJs/variables' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Variables</NavLink>
        
        <NavLink to='/basicJs/operators' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Operators</NavLink>
        
        <NavLink to='/basicJs/datatype' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">Data Types</NavLink>
        
        <NavLink to='/basicJs/function' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Functions</NavLink>
       
        <NavLink to='/basicJs/objectcs' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Objects</NavLink>
        
        <NavLink to='/basicJs/array' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Arrays</NavLink>
        
        <NavLink to='/basicJs/events' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Events</NavLink>
        
        <NavLink to='/basicJs/stringMethods' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">String Methods</NavLink>
        
        <NavLink to='/basicJs/objectMethods' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">Objects Methods</NavLink>
        
        <NavLink to='/basicJs/date' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Dates</NavLink>
        
        <NavLink to='/basicJs/comparison' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Comparisons</NavLink>
        
        <NavLink to='/basicJs/errors' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Errors</NavLink>
        
        <NavLink to='/basicJs/oop' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JavaScript OOP</NavLink>
        
        <NavLink to='/basicJs/debugging' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">JS Debugging</NavLink>
        
    </>
    return (
        <div className="bg-gray-100 h-[490px] pt-4 ">
            <h3 className="text-2xl mb-2 pl-4">JS Tutorial</h3>
            <ul className="flex flex-col w-full">
                {jsMenuLink}
            </ul>
        </div>
    );
};

export default JsMenu;