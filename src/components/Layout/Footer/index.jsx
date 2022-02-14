import React from "react";
import { FooterWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import Lines from "../../../assets/svgs/coming-soon-lines.svg";
import Apple from "../../../assets/svgs/apple.svg";
import Google from "../../../assets/svgs/google-play.svg";
import ComingSoon from "../../../assets/svgs/coming-soon.svg";
import Logo from "../../../assets/svgs/logo-white.svg";
import Hetical from "../../../assets/pngs/hetical.png";
import Button from "../../Button";
import Input from "../../TextField";
import { Twitter, Instagram, Facebook } from "../../../assets/svgs/exports";

const LandingFooter = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <FooterWrap>
      <FlexibleDiv flexDir="column">
        {/* coming soon section */}
        <FlexibleDiv
          className="comingSoon"
          justifyContent="space-between"
          flexWrap="nowrap"
        >
          {/* coming soon left section */}
          <FlexibleDiv
            width="40%"
            flexDir="column"
            alignItems="flex-start"
            className="leftSection"
          >
            <Title level={4}>iRaters Mobile App</Title>
            <Title level={1}>Coming Soon!</Title>
            <p>
              Be the first to know when we launch our mobile app. Join our
              waitlist and get notified right in your inbox
            </p>
            <FlexibleDiv
              justifyContent="space-between"
              width="350px"
              className="downloadLinks-wrap"
            >
              <FlexibleDiv className="downloadLinks">
                <img src={Apple} alt="" />
                <small>
                  Coming soon on <br /> <b>App Store</b>
                </small>
              </FlexibleDiv>
              <FlexibleDiv className="downloadLinks">
                <img src={Google} alt="" />
                <small>
                  Coming soon on <br /> <b>Google Playstore</b>
                </small>
              </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv
              flexWrap="nowrap"
              justifyContent="space-between"
              height="150px"
              className="formWrap"
            >
              <Input width="65%" placeholder="Email Address" />
              <Button width="200px">Join our App waitlist</Button>
            </FlexibleDiv>
          </FlexibleDiv>

          {/* coming soon right section */}
          <FlexibleDiv width="50%" className="rightSection">
            <img src={ComingSoon} alt="" />
          </FlexibleDiv>
          <img src={Lines} alt="" className="lines" />
        </FlexibleDiv>

        {/* footer main */}
        <FlexibleDiv className="footerMain">
          <FlexibleDiv
            className="landingPageFooter"
            flexDir="column"
            alignItems="flex-start"
          >
            <div className="landingPageFooter__logoWrap">
              <img alt="" src={Logo} />
            </div>
            <FlexibleDiv
              justifyContent="space-between"
              className="landingPageFooter__sub"
              flexWrap="no-wrap"
              alignItems="flex-start"
            >
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <p>
                  ©2022 iRaters Nigeria Limited <br />
                  <Text>
                    <Link to="/"> Terms of service | </Link>
                    <Link to="/">Privacy policy</Link>
                  </Text>
                </p>

                <p>
                  iRaters.ng is crafted to trade trade, buy & sell giftcards and
                  bitcoins, at the best rates and get paid instantly into your
                  bank account.
                </p>
              </FlexibleDiv>
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <Title level={5}>Quick Links</Title>
                <FlexibleDiv
                  justifyContent="space-between"
                  height="35px"
                  alignItems="flex-start"
                >
                  <Link to="/rate-calculator">Rate Calculator</Link>
                  <Link to="/faq">FAQs</Link>
                </FlexibleDiv>
                <FlexibleDiv justifyContent="space-between">
                  <Link to="/contact-us">Contact </Link>
                  <Link to="/about-us">About </Link>
                </FlexibleDiv>
              </FlexibleDiv>
              <FlexibleDiv flexDir="column" alignItems="flex-start">
                <Title level={5}>Get in touch</Title>
                <p>+234 (0)704 148 8189</p>
                <p>iratersworld@gmail.com</p>
                <FlexibleDiv justifyContent="space-between" width="150px">
                  <a href="/">
                    <Facebook />
                  </a>
                  <a href="/">
                    <Instagram />
                  </a>

                  <a href="/">
                    <Twitter />
                  </a>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv
              justifyContent="flex-start"
              alignItems="flex-end"
              height="70px"
            >
              <img src={Hetical} alt="" />
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </FooterWrap>
  );
};

export default LandingFooter;
