import styled from "styled-components";
import { Drawer } from "antd";

export const GiftcardStyles = styled.div`
  width: 100%;
  h2 {
    width: max-content;
  }
  .header_wrap {
    input {
      margin-right: 10px !important;
    }
    @media (max-width: 950px) {
      flex-direction: column;
      align-items: flex-start;
      .search_wrap {
        width: 100%;
        flex-direction: column;
        align-items: flex-end;
        .ant-input-affix-wrapper {
          width: 100% !important;
          margin-bottom: 12px;
        }
      }
    }
  }
`;
