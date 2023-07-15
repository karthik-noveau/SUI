import { IoIosArrowDown } from 'react-icons/io';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Logo from '../images/Logo.png'

import './style.css'

export const SUIDeskNavbar = ({ className }) => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const navigate = useNavigate()

    return (
        <div className={className}>

            <div className='SUIDeskNavbar'>
                <div className='SUIDeskNavbarContainer'>
                    <div className='SUIDeskLogo'>
                        {/* <p>Logo</p> */}
                        <img src={Logo} alt={Logo} onClick={() => { navigate("/") }} />
                    </div>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className='SUIDeskNavbarContainerBox'>
                        <Menu.Item key="Home" >
                            <Link to="/"> Home</Link>
                        </Menu.Item>
                        <Menu.Item key="About" >
                            <Link to="/about"> About</Link>
                        </Menu.Item>
                        <Menu.SubMenu className='SUIDeskNavbarSubMenuContainer' key="Advantage" title={<span>Advantage <IoIosArrowDown className='SUIDeskNavbarDownArrowIcon' /></span>}>
                            <Menu.ItemGroup className='SUIDeskNavbarSubMenuLink'>
                                <Menu.Item key="setting:1"><Link> Option 1</Link></Menu.Item>
                                <Menu.Item key="setting:2"><Link> Option 2</Link></Menu.Item>
                                <Menu.Item key="setting:3"><Link> Option 3</Link></Menu.Item>
                                <Menu.Item key="setting:4"><Link> Option 4</Link></Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.Item key="Service">
                            <Link to="/service">Service</Link>
                        </Menu.Item>
                        <Menu.Item key="Payment">
                            <Link to="/payment">Payment</Link>
                        </Menu.Item>
                        <Menu.Item key="Cart">
                            <Link to="/cart">Cart</Link>
                        </Menu.Item>
                        <Menu.Item key="Blog">
                            <Link to="/blog">Blog</Link>
                        </Menu.Item>
                        <Menu.Item key="Contact" className='SUIDeskNavbarLastMenuItem'>
                            <Link to="/contact"> Contact </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>

        </div>
    );
};

