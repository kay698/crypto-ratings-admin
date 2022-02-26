import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import Select from "../../../components/Select";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography, Popover, notification, Form } from "antd";
import Button from "../../../components/Button";
import CustomTable from "../../../components/Table";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { CryptoStyles } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import {
  addCrypto,
  deleteCrypto,
  getAllCrypto,
  updateCrypto,
  uploadFile,
} from "../../../network/crypto";
import { ModalWrapper } from "../../../components/ModalStylesWrap";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import { currencies, getCurrncy } from "../../../utils/dataHelpers/selectData";
import UploadImageIcon from "../../../assets/pngs/uploadImage.png";

function Crypto() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [showAddNewCrypto, setShowAddNewCrypto] = useState(false);
  const [showDeleteCrypto, setShowDeleteCrypto] = useState(false);
  const [showEditCrypto, setShowEditCrypto] = useState(false);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState();
  const [editForm] = Form.useForm();
  const [cryptoId, setCryptoId] = useState("");
  const [image, setImage] = useState();
  const [pictureLoading, setPictureLoading] = useState(false);

  const handleCurrencyCategory = (value) => {
    setCurrency(value);
  };

  const handleShowEdit = (val) => {
    editForm.setFieldsValue({
      amount: val.amount,
      title: val.title,
    });
    setCurrency(val.currency);
    setImage(val.logo);
    setCryptoId(val._id);
    setShowEditCrypto(true);
  };

  const handleShowDelete = (val) => {
    setShowDeleteCrypto(true);
    setCryptoId(val._id);
  };

  const columns = [
    {
      title: "Cryptocurrency",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Rate",
      dataIndex: "amount",
      render: (id, crypto) =>
        `NGN ${crypto?.amount}${getCurrncy(crypto?.currency)}`,
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, user) => (
        <Popover
          placement="bottomLeft"
          content={
            <>
              <p
                style={{ opacity: ".5", cursor: "pointer" }}
                onClick={() => handleShowEdit(user)}
              >
                <FiEdit style={{ margin: "0 5px -2px 0" }} />
                Edit
              </p>
              <p
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleShowDelete(user)}
              >
                <RiDeleteBin6Line style={{ margin: "0 5px -2px 0" }} />
                Delete
              </p>
            </>
          }
          trigger="hover"
        >
          <Button
            width="max-content"
            height="max-content"
            background="transparent"
            boxShadow="none"
            hover="transparent"
          >
            <BiDotsVerticalRounded className="menu" />
          </Button>
        </Popover>
      ),
    },
  ];

  // create crypto
  async function handleCreateNewCrypto(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      logo: image,
      currency: currency,
    };
    try {
      const data = await addCrypto(payload);
      notification.open({
        message: "Success",
        description: "Crypto added",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowAddNewCrypto(false);
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
  async function handleEditCrypto(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      currency: currency,
      logo: image,
      cryptoId: cryptoId,
    };
    try {
      const data = await updateCrypto(payload, cryptoId);
      notification.open({
        message: "Success",
        description: "Crypto updated",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowEditCrypto(false);
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

  // create delete crypto
  async function handleDeleteCrypto() {
    setIsLoading(true);
    try {
      await deleteCrypto({ cryptoId: cryptoId });
      notification.open({
        message: "Success",
        description: "Crypto deleted",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowDeleteCrypto(false);
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
  // const handleSearch = async (value) => {
  //   if (value.searchResults === "") {
  //     return;
  //   }
  //   setSearching(true);
  //   try {
  //     const data = await searchTeam(
  //       businessOwner?.businessId,
  //       value.searchResults
  //     );

  //     setSearching(false);
  //     setSearchResults(data);
  //   } catch (e) {
  //     setSearching(false);
  //     console.log(e);
  //   }
  // };

  async function handleImage(event) {
    setPictureLoading(true);
    const maxFileLimit = 512000; // 64kb
    if (event.target.files[0].type.indexOf("image") < 0) {
      notification.open({
        message: "Error",
        description: "Only Images are allowed. Please upload an image instead.",
        icon: <SmileOutlined style={{ color: "red" }} />,
      });
      return;
    }
    if (event.target.files[0].size > maxFileLimit) {
      notification.open({
        message: "Error",
        description: "File is too large, Max file size is 64kb",
        icon: <SmileOutlined style={{ color: "red" }} />,
      });
      return;
    }
    const { files } = event.target;
    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const { data } = await uploadFile(formData);
      setPictureLoading(false);
      setImage(data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
        // notification.open({
        //   message: "Error",
        //   description: "Only Images are allowed. Please upload an image instead.",
        //   icon: <SmileOutlined style={{ color: "red" }} />,
        // });
      } else {
        console.log(error);
        setPictureLoading(false);
      }
    }
  }

  return (
    <DashboardLayout>
      <CryptoStyles>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between" className="header_wrap">
            <Typography.Title level={2}>Crypto</Typography.Title>
            <FlexibleDiv
              width="80%"
              justifyContent="space-between"
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
              />
              <Button
                height="50px"
                boxShadow="none"
                onClick={() => setShowAddNewCrypto(true)}
              >
                + Add New Crypto
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>
          <CustomTable
            func={getAllCrypto}
            columns={columns}
            searchResults={searchResults}
          />
        </FlexibleDiv>
      </CryptoStyles>
      {/* Add crypto */}
      <ModalWrapper
        visible={showAddNewCrypto}
        footer={null}
        closable={true}
        onCancel={() => setShowAddNewCrypto(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Add New Crypto</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={form}
              onFinish={handleCreateNewCrypto}
              style={{ width: "100%" }}
            >
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input
                  placeholder="Crypto Name"
                  background="#F5FCFF"
                  height="50px"
                />
              </Form.Item>

              <FlexibleDiv
                flexWrap="nowrap"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                  name="amount"
                >
                  <Input
                    prefix={<span className="prefix">NGN</span>}
                    placeholder="Trading rate"
                    background="#F5FCFF"
                    height="50px"
                    type="number"
                  />
                </Form.Item>

                <Select
                  className="selectInput"
                  value={currency}
                  width="120px"
                  placeholder="/ $"
                  onChange={handleCurrencyCategory}
                >
                  {currencies.map((value, index) => (
                    <Select.Option value={value.title} key={index}>
                      {value.sign}
                    </Select.Option>
                  ))}
                </Select>
              </FlexibleDiv>

              <FlexibleDiv flexDir="column" margin="0 0 10px 0">
                <span className="label">Upload Image</span>

                {pictureLoading ? (
                  <LoadingOutlined />
                ) : (
                  <>
                    {" "}
                    <label htmlFor="addImage">
                      <FlexibleDiv
                        className="imageWrap"
                        width="max-content"
                        height="max-content"
                      >
                        <img src={image || UploadImageIcon} alt="" />
                      </FlexibleDiv>
                    </label>
                    <Input
                      hidden
                      type="file"
                      id={"addImage"}
                      name="file"
                      onChange={handleImage}
                    />{" "}
                  </>
                )}
              </FlexibleDiv>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>

      {/* edit crypto */}
      <ModalWrapper
        visible={showEditCrypto}
        footer={null}
        closable={true}
        onCancel={() => setShowEditCrypto(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Edit Crypto</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={editForm}
              onFinish={handleEditCrypto}
              style={{ width: "100%" }}
            >
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input
                  placeholder="Crypto Name"
                  background="#F5FCFF"
                  height="50px"
                />
              </Form.Item>

              <FlexibleDiv
                flexWrap="nowrap"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                  name="amount"
                >
                  <Input
                    prefix={<span className="prefix">NGN</span>}
                    placeholder="Trading rate"
                    background="#F5FCFF"
                    height="50px"
                    type="number"
                  />
                </Form.Item>

                <Select
                  className="selectInput"
                  value={currency}
                  width="120px"
                  placeholder="/ $"
                  onChange={handleCurrencyCategory}
                >
                  {currencies.map((value, index) => (
                    <Select.Option value={value.title} key={index}>
                      {value.sign}
                    </Select.Option>
                  ))}
                </Select>
              </FlexibleDiv>

              <FlexibleDiv flexDir="column" margin="0 0 10px 0">
                <span className="label">Edit Image</span>

                {pictureLoading ? (
                  <LoadingOutlined />
                ) : (
                  <>
                    {" "}
                    <label htmlFor="addImage">
                      <FlexibleDiv
                        className="imageWrap"
                        width="max-content"
                        height="max-content"
                      >
                        <img src={image || UploadImageIcon} alt="" />
                      </FlexibleDiv>
                    </label>
                    <Input
                      hidden
                      type="file"
                      id={"addImage"}
                      name="file"
                      onChange={handleImage}
                    />{" "}
                  </>
                )}
              </FlexibleDiv>

              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>

      {/* delete crypto */}
      <ModalWrapper
        visible={showDeleteCrypto}
        footer={null}
        closable={true}
        onCancel={() => setShowDeleteCrypto(false)}
      >
        <FlexibleDiv flexDir="column" height="250px">
          <Typography.Title level={5}>
            Are you sure you want to delete this crypto
          </Typography.Title>
          <Button
            type="primary"
            htmlType="submit"
            width="200px"
            height="45px"
            loading={isLoading}
            onClick={handleDeleteCrypto}
          >
            Delete
          </Button>
        </FlexibleDiv>
      </ModalWrapper>
    </DashboardLayout>
  );
}

export default Crypto;
