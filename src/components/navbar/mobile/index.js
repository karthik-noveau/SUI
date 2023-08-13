import { Menu, Collapse } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import Logo from "../images/Logo.png";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const { Panel } = Collapse;

export const SUIMobileNavbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  return (
    <div className={className}>
      <div className="SUIMobileNavbar">
        <div className="SUIMobileNavbarContainer">
          <div className="SUIMobileNavbarContainerBox">
            <div className="SUIMobileNavbarLogo">
              <img
                src={Logo}
                alt={Logo}
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="SUIMobileNavbarHamburgerButton">
              <AiOutlineMenu
                onClick={toggleCollapse}
                className="HamburgerIcon"
              />
            </div>
          </div>
        </div>

        <Collapse
          bordered={false}
          activeKey={open ? "1" : ""}
          onChange={toggleCollapse}
          expandIcon={() => null} // Removes the expand/collapse arrow icon
        >
          <Panel key="1">
            <div className="SUIMobileNavbarDrawer">
              <div className="SUIMobileNavbarDrawerContainer">
                <Menu
                  style={{ width: 256 }}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                  className="SUIMobileNavbarDrawerContainerBox"
                >
                  <Menu.Item
                    key="Home"
                    className="custom-item"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <Link to="home">Home</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="sky-ui"
                    className="custom-item"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <Link to="sky-ui/overview"> Components</Link>
                  </Menu.Item>

                  <Menu.Item
                    key="Blog"
                    className="custom-item"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <Link to="blog"> Blog</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="Git Hub"
                    className="custom-item"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <Link to="github">Git Hub</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="Contact"
                    className="custom-item"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <Link to="contact"> Contact</Link>
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
