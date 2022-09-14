import React, { PropsWithChildren } from 'react';
import { Header, Footer } from '../';

interface LayoutProps {
    children: PropsWithChildren;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
