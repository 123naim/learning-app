import { Outlet } from "react-router-dom";
import JsMenu from "./JsMenu";



const BasicJS = () => {
    return (
        <div>
            <div className="grid grid-cols-6">
                <div className="col-span-1 overflow-y-scroll h-[505px]">
                    <JsMenu></JsMenu>
                </div>
                <div className="col-span-5 h-[500px]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default BasicJS;