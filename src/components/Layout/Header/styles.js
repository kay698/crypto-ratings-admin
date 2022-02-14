import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 90px;
  padding: 0;
  top: 0;
  right: 0;
  z-index: 2000000;
  position: absolute;

  .desktopHeader {
    width: 100%;
    height: 100%;
    @media (max-width: 800px) {
      display: none;
    }

    .desktopHeader__sub {
      @media (max-width: 1000px) {
        width: 95%;
      }
    }

    .desktopHeader__logoWrap {
      width: 90px;
      height: 30px;
      max-width: 90px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .login {
      margin: 20px 25px 0 0;
      transition: all 0.3s ease;
      letter-spacing: 0.02em;
      font-size: 14px;
      @media (max-width: 1000px) {
        font-size: 13px;
      }
    }

    .whiteButton {
      background: #fff;
      a {
        color: #006eef !important;
      }
    }

    .desktopHeader__itemsWrap {
      ul {
        width: max-content;
        display: flex;
        width: 60%;
        justify-content: space-evenly;
        background-color: transparent;
        border: none;
        min-width: 400px;

        li {
          padding: 7px 5px;
          margin: 0 5px;
          position: relative;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          font-size: 14px;
          /* color: #006eef; */
          @media (max-width: 1000px) {
            font-size: 13px;
          }

          ::before {
            content: "";
            width: 100%;
            height: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transition: all 0.3s ease;
            background-color: #6bbb99;
            border-radius: 4px;
            transform: rotate(180deg);
          }

          :hover {
            ::before {
              height: 4px;
            }
          }
        }
      }
    }
  }

  .mobileMenuWrap {
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
    .mobileHeader__logoWrap {
      width: 60px;
      height: 60px;
      max-width: 60px;
      max-height: 60px;
      margin: 12px 0 0 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .mobileHeader__menuIcon {
      background: white;
      box-shadow: 0 0 220px 0.5px black;
      overflow: hidden;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      position: fixed;
      z-index: 1000;
      right: 15px;
      top: 15px;
      div {
        width: 30px;
        height: 3px;
        background-color: #2f2d51;
        transition: all 0.2s ease;
        position: relative;
        left: 0;
      }
      .mobileHeader__menuIcon__firstTab {
        height: ${(props) => (props.showMenu ? "2px" : "3px")};
        width: ${(props) => (props.showMenu ? "22px" : "15px")};
        left: ${(props) => (props.showMenu ? "0" : "3px")};
        transform: ${(props) =>
          props.showMenu ? "rotate(-40deg)" : "rotate(0);"};
        margin-bottom: ${(props) => (props.showMenu ? "-2px" : "6px")};
      }

      .mobileHeader__menuIcon__secondTab {
        display: ${(props) => (props.showMenu ? "none" : "block")};
      }
      .mobileHeader__menuIcon__thirdTab {
        height: ${(props) => (props.showMenu ? "2px" : "3px")};
        width: ${(props) => (props.showMenu ? "22px" : "15px")};
        left: ${(props) => (props.showMenu ? "0" : "-1px")};
        transform: ${(props) =>
          props.showMenu ? "rotate(40deg)" : "rotate(0);"};
        margin-top: ${(props) => (props.showMenu ? "0" : "6px")};
      }
    }
  }
`;

export const MobileWrap = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.showMenu ? "translateX(0)" : "translateX(-800px)"};
  height: 100vh;
  overflow: hidden;
  background-color: white;
  position: fixed;
  z-index: 10;
  top: 0;

  .mobileHeader__itemsWrap {
    background-color: white;
  }
  .mobileHeader__listWrap {
    padding: 20px 0;

    @media (max-width: 400px) {
      width: 90%;
    }

    ul {
      border: none;
      li {
        margin: 25px 0;
        min-width: 120px;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #006eef;
        cursor: pointer;
        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
