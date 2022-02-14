import React, { useState } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { Typography, Input, Form, notification } from "antd";
import { Link } from "react-router-dom";
// import { logInUser } from "../../network/auth";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Logo from "../../assets/pngs/logo.png";
import Button from "../../components/Button";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  async function handleFormSubmit(values) {
    // setIsLoading(true);
    // const payload = {
    //   email: values.email.toLowerCase(),
    //   password: values.password,
    // };
    // try {
    //   const data = await logInUser(payload);
    //   sessionStorage.setItem("user_token", data.token);
    //   window.location.replace("");
    //   setIsLoading(false);
    // } catch (error) {
    //   if (error.response) {
    //     notification.open({
    //       message: "Error",
    //       description: "Email or password is incorrect",
    //       icon: <SmileOutlined style={{ color: "red" }} />,
    //     });
    //     setIsLoading(false);
    //   } else {
    //     notification.open({
    //       message: "Error",
    //       description:
    //         "There was an issue with your network. Pls try again later",
    //       icon: <SmileOutlined style={{ color: "red" }} />,
    //     });
    //     setIsLoading(false);
    //   }
    // }
  }

  return (
    <AuthStylesWrap login>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <FlexibleDiv className="authForm">
            <Title level={5}> Login</Title>
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  className="passwordInput"
                  placeholder="password"
                  iconRender={(visible) => (visible ? "" : "")}
                />
              </Form.Item>
              <FlexibleDiv className="forgotPassword">
                <Text>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </Text>
              </FlexibleDiv>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Login
              </Button>
            </Form>
          </FlexibleDiv>
          <FlexibleDiv className="account-status">
            <Text>
              Don't have an account?<Link to="/signup"> Register</Link>
            </Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  );
};

export default Login;
