import { Outlet } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;