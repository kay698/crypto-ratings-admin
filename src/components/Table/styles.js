import styled from "styled-components";

export const TableStyles = styled.section`
  width: 100%;
  height: max-content;
  padding: 0;
  background-color: transparent;
  overflow: hidden;
  margin-top: 10px;
  .ant-table-wrapper {
    border-radius: 0;
  }
  .ant-table {
    background: transparent;
  }
  .ant-table-thead > tr > th {
    background: transparent !important;
    border-bottom: 1px solid #e0e0e0;
    color: #4f4f4f;
    font-weight: bold;
    ::before {
      display: none;
    }
  }
  .ant-table-tbody > tr > td {
    background: transparent !important;
    border-bottom: 1px solid #e0e0e0;
    color: #4f4f4f;
  }
`;
