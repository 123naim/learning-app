import { NavLink } from "react-router-dom";
import './jsMenu.css'

const JsMenu = () => {
    const jsMenuLink = <>
        <NavLink to='/basicJs/jsIntroduction' className="text-black hover:text-black hover:bg-gray-200  pl-4 pt-[2px] pb-[2px]" > Js Introduction</NavLink>

        <NavLink to='/basicJs/syntax' className="text-black hover:text-black bg-gray-100 hover:bg-gray-200 pl-4 pt-[2px] pb-[2px]">Js Syntax</NavLink>
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