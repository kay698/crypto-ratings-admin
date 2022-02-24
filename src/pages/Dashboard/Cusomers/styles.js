import styled from "styled-components";
import { Drawer } from "antd";

export const CustomersStyles = styled.div`
  width: 100%;
  h2 {
    width: max-content;
  }
  .header_wrap {
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      .search_wrap {
        width: 100%;
        .ant-input-affix-wrapper {
          width: 100% !important;
        }
      }
    }
  }
`;
