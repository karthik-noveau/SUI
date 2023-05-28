import { Menu, Button, Collapse } from 'antd';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

import './style.css';

const { Panel } = Collapse;

export const SUIMobileNavbar = ({ className, menuItemColor, menuItemHoverColor, MobileBgColor }) => {

    const [open, setOpen] = useState(false);
    const toggleCollapse = () => {
        setOpen(!open);
    };

    const SUIStyles = `
    .SUIMobileNavbar {
        --MenuBarbgColor: ${MobileBgColor};
    }
    .SUIMobileNavbarDrawer {
        --DrawerbgColor: ${MobileBgColor};
        --menuItemColor: ${menuItemColor};
        --menuItemHoverColor: ${menuItemHoverColor};
        --menuItemActiveColor: ${menuItemHoverColor};
    }
    `;

    return (
        <div className={className}>
            <style>
                {SUIStyles}
            </style>
            <div className='SUIMobileNavbar'>
                <div className='SUIMobileNavbarContainer'>
                    <div className='SUIMobileNavbarContainerBox'>
                        <div className='SUIMobileNavbarLogo'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/skynoveau-office.appspot.com/o/logo.png?alt=media&token=e375539c-5dff-44c8-98b2-50b8adc60488" />
                        </div>
                        <div className='SUIMobileNavbarHamburgerButton'>
                            <HiMenuAlt3 onClick={toggleCollapse} className='HamburgerIcon' />
                        </div>
                    </div>
                </div>

                <Collapse
                    bordered={false}
                    activeKey={open ? '1' : ''}
                    onChange={toggleCollapse}
                    expandIcon={() => null} // Removes the expand/collapse arrow icon
                >
                    <Panel key="1" >
                        <div className='SUIMobileNavbarDrawer'>
                            <div className='SUIMobileNavbarDrawerContainer'>
                                <Menu
                                    style={{ width: 256 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    className='SUIMobileNavbarDrawerContainerBox'
                                >
                                    <Menu.Item key="Home" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Home
                                    </Menu.Item>
                                    <Menu.Item key="About" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        About
                                    </Menu.Item>
                                    <Menu.SubMenu key="Advantage" title="Advantage" className="custom-submenu">
                                        <Menu.Item key="Option1" className="custom-item" onClick={() => { setOpen(!open) }}>Option1</Menu.Item>
                                        <Menu.Item key="Option2" className="custom-item" onClick={() => { setOpen(!open) }}>Option2</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu key="Features" title="Features" className="custom-submenu">
                                        <Menu.Item key="Option3" className="custom-item" onClick={() => { setOpen(!open) }}>Option3</Menu.Item>
                                        <Menu.Item key="Option4" className="custom-item" onClick={() => { setOpen(!open) }}>Option4</Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.Item key="Service" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Service
                                    </Menu.Item>
                                    <Menu.Item key="Payment" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Payment
                                    </Menu.Item>
                                    <Menu.Item key="Cart" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Cart
                                    </Menu.Item>
                                    <Menu.Divider className="custom-divider" />
                                    <Menu.Item key="Blog" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Blog
                                    </Menu.Item>
                                    <Menu.Item key="Contact" className="custom-item" onClick={() => { setOpen(!open) }}>
                                        Contact
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </div>
                    </Panel>
                </Collapse>

            </div>
        </div>
    );
};

