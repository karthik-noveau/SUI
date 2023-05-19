import { IoIosArrowDown } from 'react-icons/io';
import { Menu } from 'antd';
import { useState } from 'react';

import './style.css'

export const SUIDeskNavbar = ({ className, menuItemColor, menuItemHoverColor,DesktopBgColor }) => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const SUIStyles = `
    .SUIDeskNavbar {
        --menuItemColor: ${menuItemColor};     
        --menuItemHoverColor:${menuItemHoverColor} ; 
        --navbarBgColor: ${DesktopBgColor};                                                                                                                                                                                                                                                     
    }
    .SUIDeskNavbarSubMenuLink{
        --subMenuItemColor: ${menuItemColor};
        --subMenuItemHoverColor: ${menuItemHoverColor};
    }
    .SUIDeskNavbarLastMenuItem {
        --lastMenuItemBgColor: ${menuItemHoverColor};
    }
    `;


    return (
        <div className={className}>
            <style>
                {SUIStyles}
            </style>
            <div className='SUIDeskNavbar'>
                <div className='SUIDeskNavbarContainer'>
                    <div className='SUIDeskLogo'>
                        {/* <p>Logo</p> */}
                        <img src="https://firebasestorage.googleapis.com/v0/b/skynoveau-office.appspot.com/o/logo.png?alt=media&token=e375539c-5dff-44c8-98b2-50b8adc60488" />
                    </div>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className='SUIDeskNavbarContainerBox'>
                        <Menu.Item key="Home">
                            Home
                        </Menu.Item>
                        <Menu.Item key="About" >
                            About
                        </Menu.Item>
                        <Menu.SubMenu className='SUIDeskNavbarSubMenuContainer' key="Advantage" title={<span>Advantage <IoIosArrowDown className='SUIDeskNavbarDownArrowIcon' /></span>}>
                            <Menu.ItemGroup className='SUIDeskNavbarSubMenuLink'>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.Item key="Service">
                            Service
                        </Menu.Item>
                        <Menu.Item key="Payment">
                            Payment
                        </Menu.Item>
                        <Menu.Item key="Cart">
                            Cart
                        </Menu.Item>
                        <Menu.Item key="Blog">
                            Blog
                        </Menu.Item>
                        <Menu.Item key="Contact" className='SUIDeskNavbarLastMenuItem'>
                            Contact
                        </Menu.Item>
                    </Menu>
                </div>
            </div>

        </div>
    );
};

