import styled from "styled-components";

export const LayoutWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow-x: hidden;
  padding: 0;
  background: #f5fcff;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  .layout__main {
    padding-top: ${({ noPadding }) => (noPadding ? "0" : "180px")};
    margin: 0;
    height: max-content;
    min-height: calc(100vh - 80px);
    width: ${({ noPadding }) => (noPadding ? "100%" : "90%")};
    @media (max-width: 600px) {
      padding-top: ${({ noPadding }) => (noPadding ? "0" : "100px")};
    }
  }
`;
