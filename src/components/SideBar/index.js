import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </ Icon>
        <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Service</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sign-in' onClick={toggle}>Sign In</SidebarRoute>
                </ SideBtnWrap>
        </SidebarWrapper>
     </SidebarContainer>
    );
};

export default SideBar;
