import styled from "styled-components";

export const DashboardLayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .ant-layout-content {
    width: calc(100% - 200px);
    height: max-content;
    margin: 70px 0 0 200px;
    min-height: calc(100vh - 70px);
    background-color: #e5e5e5;
    padding: ${({ noPadding }) => (noPadding ? 0 : "20px")};
    position: relative;

    @media (max-width: 1000px) {
      width: calc(100% -70px);
      margin-left: 70px;
    }
    @media (max-width: 800px) {
      width: 100vw;
      margin-left: 0;
      padding: ${({ noPadding }) => (noPadding ? 0 : "15px")};
      margin-top: 80px;
      min-height: calc(100vh - 80px);
    }
  }

  .layout__sub__textWrap {
    display: none;
    padding-left: ${({ noPadding }) => (noPadding ? "10px" : "0")};

    h4 {
      font-size: 20px;
      color: #fb7007;
      font-weight: 500;
    }

    span {
      line-height: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      display: ${({ activePath }) => (activePath === "/" ? "block" : "none")};
    }

    @media (max-width: 800px) {
      display: block;
    }
  }
  .ant-layout-sider-children {
    height: max-content;
  }
`;
