import styled from "styled-components";

export const CryptoStyles = styled.div`
  width: 100%;
  h2 {
    width: max-content;
  }
  .header_wrap {
    input {
      margin-right: 10px;
    }
    @media (max-width: 950px) {
      flex-direction: column;
      align-items: flex-start;
      .search_wrap {
        width: 100%;
      }
    }
  }
`;
