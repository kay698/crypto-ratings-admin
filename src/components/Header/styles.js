import styled from "styled-components";

export const HeaderStyles = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  .ant-layout-header {
    height: 70px !important;
    background: #006eef;
    padding: 0 20px;

    img {
      width: 100px;
    }
    .menu {
      color: #fff;
      font-size: 27px;
      @media (min-width: 800px) {
        display: none;
      }
    }
    span {
      font-weight: bold;
      color: #fff;
      cursor: pointer;

      svg {
        font-size: 20px;
        margin: 0 0 -5px 7px;
      }
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;
