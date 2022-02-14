import React from "react";
import { Menu } from "antd";
import { LandingMenuList } from "../../../utils/dataHelpers/landingMenuItems";
import { MobileWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import Logo from "../../../assets/pngs/logo.png";
import Button from "../../Button";
import { Link } from "react-router-dom";

const MobileNav = ({ setShowMenu, showMenu }) => {
  const routeTo = (path) => {
    window.location.replace(path);
  };
  return (
    <MobileWrap showMenu={showMenu}>
      <FlexibleDiv className="mobileHeader">
        <FlexibleDiv
          className="mobileHeader__sub"
          height="100%"
          flexDir="column"
        >
          <FlexibleDiv className="mobileHeader__logoAndMenuIconWrap">
            <FlexibleDiv
              justifyContent="space-between"
              height="80px"
              bgColor="red"
              width="94%"
            >
              <Link to="/" target="">
                <div className="mobileHeader__logoWrap menuOpen">
                  <img alt="" src={Logo} />
                </div>
              </Link>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv flexDir="column" className="mobileHeader__itemsWrap">
            <FlexibleDiv
              className="mobileHeader__listWrap"
              width="80%"
              justifyContent="flex-start"
            >
              <Menu>
                {LandingMenuList.map((item, index) => (
                  <Menu.Item
                    key={index}
                    onClick={() => {
                      routeTo(item.to);
                    }}
                  >
                    {item.icon}
                    {item.title}
                  </Menu.Item>
                ))}

                <Menu.Item
                // key={index}
                // onClick={() => {
                //   routeTo(item.to);
                // }}
                >
                  Login
                </Menu.Item>
              </Menu>
            </FlexibleDiv>
            <FlexibleDiv
              width="max-content"
              height="120px"
              justifyContent="space-between"
              flexDir="column"
              className="mobileHeader__buttonsWrap"
            >
              <Button height="50px">Register</Button>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </MobileWrap>
  );
};

export default MobileNav;
