import styled from "styled-components";

export const DashboardLayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .ant-layout-content {
    width: calc(100% - 150px);
    height: max-content;
    margin: 70px 0 0 150px;
    min-height: calc(100vh - 70px);
    background: #006eef11;
    background-color: ;
    padding: 30px;
    position: relative;

    @media (max-width: 800px) {
      width: 100vw;
      margin-left: 0;
      padding: 30px 20px;
    }
  }
`;
