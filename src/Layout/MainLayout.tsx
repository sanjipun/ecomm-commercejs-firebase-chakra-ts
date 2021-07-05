import Footer from 'Components/Footer/Footer';
import Navbar from 'Components/Navbar/Navbar';
import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;