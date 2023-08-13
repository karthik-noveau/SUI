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
                        <Menu.Item key="sky-ui" >
                            <Link to="/sky-ui/overview"> Components</Link>
                        </Menu.Item>
                        <Menu.Item key="Blog">
                            <Link to="/blog">Blog</Link>
                        </Menu.Item>
                        <Menu.Item key="Git Hub">
                            <Link to="/github">Git Hub</Link>
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

