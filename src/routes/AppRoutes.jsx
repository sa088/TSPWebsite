import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Services from "@/pages/Services/Services";
import Solutions from "@/pages/Solutions/Solutions";
import DigitalMarketing from "@/pages/DigitalMarketing/DigitalMarketing";
// import About from '../pages/About';
// import Services from '../pages/Services';
// import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/services/:category/:service" element={<Services />} />
                <Route path="/solutions/:solution" element={<Solutions />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/contact" element={<ContactUs />} />
                {/* <Route path="about" element={<About />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    );
};