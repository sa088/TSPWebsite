import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home/Home';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
    // const location = useLocation();

    // Define which pages use the main footer vs secondary footer
    // const useMainFooter = ['/', '/contact'].includes(location.pathname);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {/* <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    );
};