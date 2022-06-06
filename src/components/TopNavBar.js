import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Input, Row, Col, Button } from "antd";
import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import useWindowSize from "../customHooks/useWindowSize";
import "../styles/top_nav_bar.scss";

const TopNavBar = () => {
  const [width] = useWindowSize();
  const [expanded, setExpanded] = useState(width > 500);

  const navLinkClassName = ({ isActive }) => {
    const classNames = "top-bar-nav-link";
    if (isActive) {
      return `${classNames} active`;
    }
    return classNames;
  };

  const onMenuToggleClicked = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`top-nav-bar ${expanded ? "expanded" : ""}`}>
      <Row gutter={[12, 12]}>
        <Col className="top-nav-logo-col" md={{ span: 6 }} xs={{ span: 24 }}>
          <Link to="/">
            <h2 className="logo">Awesome Shop</h2>
          </Link>
          <Button
            onClick={onMenuToggleClicked}
            className="mobile-menu-btn d-block d-md-none"
          >
            {expanded ? <CloseOutlined /> : <MenuOutlined />}
          </Button>
        </Col>
        <Col className="search-input-col" md={{ span: 9 }} xs={{ span: 24 }}>
          <div className="search-input">
            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 46px)" }}
                placeholder="Search products"
              />
              <Button type="default">
                <SearchOutlined />
              </Button>
            </Input.Group>
          </div>
        </Col>
        <Col md={{ span: 9 }} xs={{ span: 24 }} className="nav-links-col">
          <NavLink className={navLinkClassName} to="/cart">
            Cart
          </NavLink>
          <NavLink className={navLinkClassName} to="/my-orders">
            My Orders
          </NavLink>
          {/* <NavLink className={navLinkClassName} to="/profile">
            Profile
          </NavLink> */}
          <NavLink className={navLinkClassName} to="/login">
            Login
          </NavLink>
        </Col>
      </Row>
    </nav>
  );
};

export default TopNavBar;
