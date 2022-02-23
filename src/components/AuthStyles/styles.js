import styled from "styled-components";

export const AuthStylesWrap = styled.div`
  width: 100vw;
  height: max-content;
  background: #f5fcff;

  a {
    font-weight: 300;
    transition: all 0.3s ease;
    font-size: 12px;
    color: #006eef;
    :hover {
      text-decoration: underline;
      color: #006eef;
    }
  }

  .logo {
    min-height: 70px;
    img {
      width: 100px;
    }
  }

  .backWrap {
    margin-bottom: 20px;

    small {
      cursor: pointer;
      font-size: 12px;
      color: #828282;
      font-weight: bold;

      :hover {
        text-decoration: underline;
      }
    }
  }
  .auth {
    .auth__sub {
      min-height: 100vh;
      padding: 50px 0;
      align-items: center;
      @media (min-width: 600px) {
        width: 500px;
      }

      .account-status {
        margin: 20px 0;
        a {
          font-size: 14px;
        }
      }

      h5 {
        font-size: 24px;
        font-weight: 500;
        color: #fff;
        color: #333333;
      }

      .authForm {
        background: #fff;
        border-radius: 40px;
        padding: 40px;
        animation: popUp 1s 1 ease;
        transform: translateY(0);
        overflow: hidden;
        border: 1px solid rgba(0, 110, 239, 0.3);

        .instructionsText {
          font-weight: normal;
          color: #4f4f4f;
          margin-bottom: 30px;
          line-height: 20px;
        }

        .ant-form {
          width: 100%;

          .ant-input,
          .passwordInput {
            height: 55px;
            background: #f5fcff;
            border: 1px solid rgba(0, 110, 239, 0.3);
            border-radius: 6px;
          }

          .passwordInput {
            input {
              border: none;
              border-radius: 0;
              margin-bottom: 0 !important;
              height: 100%;
            }
          }
          .forgotPassword {
            margin: 60px 0 -20px 0;
          }

          .ant-btn-primary {
            margin: 40px 0 0 0;
            box-shadow: 0px 20px 70px rgba(0, 110, 239, 0.3);
          }
        }
        @media (max-width: 600px) {
          padding: 40px 10px;
          border-radius: 20px;
        }
      }
    }
  }

  @keyframes popUp {
    0% {
      transform: translateY(100px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .ant-checkbox-wrapper {
    margin: -30px 0 30px 0;
    .ant-checkbox {
      /* margin: 5px; */
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background: #6bbb99;
      border-color: #6bbb99;
    }
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-checked::after {
      border-color: #6bbb99;
    }
  }
  .links {
    font-size: 12px;
    a {
      font-weight: bold;
      color: #6bbb99;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .checkAgreement {
    color: red;
    font-size: 12px;
  }
`;
