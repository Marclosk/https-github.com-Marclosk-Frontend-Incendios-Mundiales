import { Outlet } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar"
import Footer from "../src/components/footer/Footer"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;