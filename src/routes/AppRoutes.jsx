import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home/Home';
import ContactUs from '@/pages/ContactUs/ContactUs';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {/* <Route path="about" element={<About />} /> */}
                {/* <Route path="services" element={<Services />} /> */}
                <Route path="/contact" element={<ContactUs />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    );
};