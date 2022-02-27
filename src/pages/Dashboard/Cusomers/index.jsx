import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import { FlexibleDiv } from "../../../components/Box/styles";
import Button from "../../../components/Button";
import CustomTable from "../../../components/Table";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { TableDrawer } from "../../../components/Drawer";
import { CustomersStyles } from "./styles";
import { FiEdit } from "react-icons/fi";
import Phone from "../../../assets/svgs/call.svg";
import Mail from "../../../assets/svgs/sms.svg";
import Trash from "../../../assets/svgs/trash.svg";
import { getAllUsers } from "../../../network/users";
import { Typography, Popover, notification, Form } from "antd";
import { deleteUser, updateUser } from "../../../network/users";
import { ModalWrapper } from "../../../components/ModalStylesWrap";
import { SmileOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Customers() {
  const [saveSearch, setSaveSearch] = useState();
  const [searchResults, setSearchResults] = useState();
  const [searching, setSearching] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [customerData, setCustomerData] = useState("");
  const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditCustomer, setshowEditCustomer] = useState(false);
  const [phoneCopy, setPhoneCopy] = useState(false);
  const [emailCopy, setEmailCopy] = useState(false);

  const [editForm] = Form.useForm();

  const handleShowEdit = (val) => {
    editForm.setFieldsValue({
      email: customerData?.email,
      phoneNumber: customerData?.phoneNumber,
      password: customerData?.password,
    });
    setshowEditCustomer(true);
  };

  const handleShowDelete = (val) => {
    setShowDeleteCustomer(true);
  };

  const handleShowDrawer = (val) => {
    setShowDrawer(true);
    setCustomerData(val);
  };

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      render: (arr, user, id) => `${id + 1}.`,
    },

    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (arr, user) => user.email,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
      render: (arr, user) => user.phoneNumber,
    },
    // {
    //   title: "Last active",
    //   dataIndex: "active",
    //   key: "active",
    //   render: (user) =>
    //     user.active === "Active" ? (
    //       <p
    //         style={{
    //           padding: "5px",
    //           borderRadius: "10px",
    //           background: "#27AE601A",
    //           color: "#27AE60",
    //         }}
    //       >
    //         {user.active}
    //       </p>
    //     ) : (
    //       user.active
    //     ),
    // },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (arr, user) => (
        <BiDotsVerticalRounded
          className="menu"
          onClick={() => handleShowDrawer(user)}
        />
      ),
    },
  ];

  const searchChange = (e) => {
    const { value } = e.target;
    if (!!value) {
      setSaveSearch(value);
    } else {
      setSaveSearch("");
      setSearchResults();
    }
  };
  const handleSearch = async (value) => {
    setSearching(true);
    const payload = `page=1&perPage=1000&query=${saveSearch}`;
    try {
      const { data } = await getAllUsers(payload);

      setSearching(false);
      setSearchResults(data?.data);
    } catch (e) {
      setSearching(false);
      console.log(e);
    }
  };

  const closeDrawer = () => {
    setShowDrawer(false);
    window.location.reload();
  };

  async function handledeleteUser() {
    setIsLoading(true);
    try {
      await deleteUser({ userId: customerData._id });
      notification.open({
        message: "Success",
        description: "Crypto deleted",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowDeleteCustomer(false);
      window.location.reload();
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: error.response.data.message,
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

  // edit crypto
  async function handleEditCustomer(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      userId: customerData._id,
    };
    try {
      const data = await updateUser(payload);
      notification.open({
        message: "Success",
        description: "Crypto updated",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setshowEditCustomer(false);
      window.location.reload();
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: error.response.data.message,
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
    <DashboardLayout>
      <CustomersStyles>
        <FlexibleDiv>
          <FlexibleDiv
            justifyContent="space-between"
            className="header_wrap"
            flexWrap="nowrap"
          >
            <Typography.Title level={2}>Customers</Typography.Title>
            <FlexibleDiv
              width="80%"
              justifyContent="flex-end"
              className="search_wrap"
              flexWrap="nowrap"
            >
              <Input
                placeholder="search"
                width="78%"
                background="#fff"
                height="50px"
                radius="8px"
                prefix={<BiSearch />}
                onChange={searchChange}
                suffix={
                  !!saveSearch && (
                    <Button
                      width="max-content"
                      height="40px"
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  )
                }
              />
            </FlexibleDiv>
          </FlexibleDiv>
          <CustomTable
            func={getAllUsers}
            columns={columns}
            searchResults={searchResults}
            searching={searching}
          />
        </FlexibleDiv>
      </CustomersStyles>
      <TableDrawer
        visible={showDrawer}
        setDrawer={setShowDrawer}
        closeDrawer={closeDrawer}
      >
        <FlexibleDiv justifyContent="space-between">
          <Typography.Title level={4}>Customer Contact Info</Typography.Title>
          <FlexibleDiv width="120px" justifyContent="space-between">
            <Button
              height="50px"
              boxShadow="none"
              background="#e0e0e0"
              hover="#e0e0e0"
              width="50px"
              onClick={handleShowEdit}
            >
              <FiEdit style={{ fontSize: "20px" }} />
            </Button>
            <Button
              height="50px"
              boxShadow="none"
              background="red"
              hover="red"
              width="max-content"
              onClick={handleShowDelete}
            >
              <img src={Trash} alt="" />
            </Button>
          </FlexibleDiv>
        </FlexibleDiv>
        <FlexibleDiv flexDir="column" margin="20px 0 0 0">
          <FlexibleDiv justifyContent="flex-start">
            <img src={Mail} alt="" />
            <Typography.Title level={5}>{customerData?.email}</Typography.Title>
            <CopyToClipboard
              text={customerData?.email}
              onCopy={() => setEmailCopy(true)}
            >
              <span className={!!emailCopy ? "copied" : "copy"}>
                Copy email
              </span>
            </CopyToClipboard>
          </FlexibleDiv>
          <FlexibleDiv justifyContent="flex-start" margin="20px 0">
            <img src={Phone} alt="" />
            <Typography.Title level={5}>
              {customerData?.phoneNumber}
            </Typography.Title>
            <CopyToClipboard
              text={customerData?.phoneNumber}
              onCopy={() => setPhoneCopy(true)}
            >
              <span className={!!phoneCopy ? "copied" : "copy"}>
                Copy phone
              </span>
            </CopyToClipboard>
          </FlexibleDiv>

          <FlexibleDiv
            className="lastActive"
            flexDir="column"
            alignItems="flex-start"
          >
            <span>Last active</span>
            <p level={5}>
              <b>5 hours ago</b>
            </p>
          </FlexibleDiv>
        </FlexibleDiv>
      </TableDrawer>

      {/* delete crypto */}
      <ModalWrapper
        visible={showDeleteCustomer}
        footer={null}
        closable={true}
        onCancel={() => setShowDeleteCustomer(false)}
      >
        <FlexibleDiv flexDir="column" height="250px">
          <Typography.Title level={5}>
            Are you sure you want to delete this user
          </Typography.Title>
          <Button
            type="primary"
            htmlType="submit"
            width="200px"
            height="45px"
            loading={isLoading}
            onClick={handledeleteUser}
          >
            Delete
          </Button>
        </FlexibleDiv>
      </ModalWrapper>

      {/* edit user */}
      <ModalWrapper
        visible={showEditCustomer}
        footer={null}
        closable={true}
        onCancel={() => setshowEditCustomer(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Edit Customer</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={editForm}
              onFinish={handleEditCustomer}
              style={{ width: "100%" }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input placeholder="Email" background="#F5FCFF" height="50px" />
              </Form.Item>
              {customerData?.accountType === "ADMIN" && (
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Password"
                    background="#F5FCFF"
                    height="50px"
                  />
                </Form.Item>
              )}

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="phoneNumber"
              >
                <Input
                  placeholder="Phone Number"
                  background="#F5FCFF"
                  height="50px"
                  type="number"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                width="100%"
                loading={isLoading}
              >
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>
    </DashboardLayout>
  );
}

export default Customers;
