import { NavLink } from "react-router-dom";
import './navLink.css'
const MenuItems = () => {
    const menuItems = <>
        <NavLink to="/basicJs"><li className="text-[19px] hover:bg-[#04aa6d] h-12 flex items-center px-3">BASIC JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">ADVANCE JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">MODERN JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">REACT JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">NEXT JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">VITE JS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">TAILWIND CSS</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">HTML</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">BOOSTRAP</li></NavLink>
        <NavLink><li className="text-[19px] hover:bg-[#04aa6d] h-12 bg-black flex items-center px-3">CSS</li></NavLink>
    </>
    return (
        <div className="h-12 bg-black flex items-center">
            <ul className="text-white flex gap-5 justify-center w-full">
                {menuItems}
            </ul>
        </div>
    );
};

export default MenuItems;