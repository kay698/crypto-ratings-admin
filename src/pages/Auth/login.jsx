import React, { useState } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { Typography, Input, Form, notification } from "antd";
import { Link } from "react-router-dom";
import { logInUser } from "../../network/auth";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Logo from "../../assets/pngs/logo.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  async function handleFormSubmit(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      email: values.email.toLowerCase(),
    };
    try {
      const data = await logInUser(payload);
      sessionStorage.setItem("admin_token", data.token);
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: "Email or password is incorrect",
          icon: <SmileOutlined style={{ color: "red" }} />,
        });
        setIsLoading(false);
      } else {
        notification.open({
          message: "Error",
          description:
            "There was an issue with your network. Pls try again later",
          icon: <SmileOutlined style={{ color: "red" }} />,
        });
        setIsLoading(false);
      }
    }
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
                <Input
                  placeholder="Email"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
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
