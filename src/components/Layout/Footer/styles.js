import styled from "styled-components";

export const FooterWrap = styled.div`
  background: #f5fcff;
  width: 100%;
  .comingSoon {
    margin: 100px 0;
    width: 90%;
    box-sizing: border-box;
    height: max-content;
    padding: 100px 50px 0 50px;
    background: #dceefd;
    border-radius: 50px;
    position: relative;
    overflow: hidden;

    .lines {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    .leftSection {
      z-index: 2;
      min-width: 650px;

      .downloadLinks-wrap {
        margin: 20px 0 0 0;
        .downloadLinks {
          width: 165px;
          height: 55.29px;
          background: #ffffff;
          border: 1px solid rgba(0, 110, 239, 0.2);
          box-sizing: border-box;
          border-radius: 38px;
          img {
            margin-right: 10px;
          }
        }
      }

      h1 {
        font-size: 70px;
        margin: 30px 0 40px 0;
        line-height: 20px;
        white-space: nowrap;
        color: #050bac;
      }
      h4 {
        color: #006eef;
      }
      p {
        max-width: 400px;
      }
    }
    .rightSection {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;

      img {
        width: 90%;
      }
      @media (max-width: 1200px) and (min-width: 800px) {
        opacity: 0.5;
      }
    }

    @media (max-width: 850px) {
      flex-direction: column;
      padding: 50px 20px 0 20px;
      border-radius: 30px;
      p {
        text-align: center;
      }

      .rightSection {
        position: relative;
        width: 100%;
      }
      .leftSection {
        min-width: 100%;
        align-items: center;
        h1 {
          font-size: 50px;
        }
      }
    }

    @media (max-width: 600px) {
      .leftSection {
        .downloadLinks-wrap {
          width: 260px;
          .downloadLinks {
            width: 125px;
            height: 45px;

            small {
              font-size: 8px;
            }
            img {
              margin-right: 5px;
            }
          }
        }

        h1 {
          font-size: 35px;
          margin: 20px 0 30px 0;
        }

        .formWrap {
          flex-direction: column;
          height: max-content;
          padding: 20px 0;
          .ant-btn,
          .ant-input {
            width: 100%;
            margin: 10px;
          }
        }
      }
    }
  }
  .footerMain {
    width: 100%;
    height: max-content;
    background: #006eef;
    padding: 60px 50px 30px 50px;
    overflow-x: hidden;
    transition: all 0.3s ease;

    .landingPageFooter__logoWrap {
      padding: 0 0 15px 0;
    }
    .landingPageFooter__sub {
      & > div {
        max-width: 200px;
        h5 {
          margin-bottom: 20px;
        }

        p,
        a,
        h5 {
          color: #fff;
        }
        span {
          font-size: 12px;
          a {
            color: #e0e0e0;
          }
        }
      }
    }
    @media (max-width: 850px) {
      padding: 60px 20px 30px 20px;
      .landingPageFooter__sub {
        flex-direction: column;
        & > div {
          margin-bottom: 30px;
          max-width: 100%;
        }
      }
    }
  }
`;
