import React, { ReactNode } from 'react'
import TopBar from '../TopBar'
import { LayoutWrapper, MainWrapper } from './styles';
import SideBar from '../SideBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <LayoutWrapper>
            <SideBar />
            <MainWrapper>
                <TopBar />
                {children}
            </MainWrapper>
        </LayoutWrapper>
    )
}

export default Layout