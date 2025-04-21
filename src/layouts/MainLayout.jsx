import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="mt-[64px] md:mt-[80px]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;