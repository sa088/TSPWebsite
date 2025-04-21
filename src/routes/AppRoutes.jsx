import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Services from "@/pages/Services/Services";
import Solutions from "@/pages/Solutions/Solutions";
import DigitalMarketing from "@/pages/DigitalMarketing/DigitalMarketing";
import Careers from "@/pages/Careers/Careers";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/services/:category/:service" element={<Services />} />
                <Route path="/solutions/:solution" element={<Solutions />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<ContactUs />} />
            </Route>
        </Routes>
    );
};