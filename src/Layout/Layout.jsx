import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="bg-[#e8f2fd] font-Karla">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;