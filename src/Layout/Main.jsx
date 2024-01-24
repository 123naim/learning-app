import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import MenuItems from "../shared/Navbar/menuItems";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MenuItems></MenuItems>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;