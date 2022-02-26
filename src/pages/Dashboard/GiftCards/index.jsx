import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import Input from "../../../components/TextField";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography, Popover, Form, notification } from "antd";
import Button from "../../../components/Button";
import CustomTable from "../../../components/Table";
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { TableDrawer } from "../../../components/Drawer";
import { GiftcardStyles } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { ModalWrapper } from "../../../components/ModalStylesWrap";
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import Select from "../../../components/Select";
import { currencies, getCurrncy } from "../../../utils/dataHelpers/selectData";
import Trash from "../../../assets/svgs/trash.svg";
import {
  addGiftCard,
  updateGiftCard,
  getAllGiftCards,
  deleteGiftCard,
  deleteGiftCardCategory,
  addGiftCardCategory,
  getAllGiftCardCategories,
  updateGiftCardCategory,
  uploadFile,
} from "../../../network/giftcards";
import UploadImageIcon from "../../../assets/pngs/uploadImage.png";

function Giftcard() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [showDrawer, setShowDrawer] = useState(false);
  const [form] = Form.useForm();
  const [editCategoryForm] = Form.useForm();
  const [editGiftcardForm] = Form.useForm();
  const [image, setImage] = useState();
  const [pictureLoading, setPictureLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showCreateGiftCardModal, setShowCreateGiftCardModal] = useState(false);
  const [giftCardCategoryData, setgiftCardCategoryData] = useState();
  const [cardId, setCardId] = useState();
  const [showDeleteGiftCardCategory, setShowDeleteGiftCardCategory] =
    useState(false);
  const [showDeleteGiftCard, setShowDeleteGiftCard] = useState(false);
  const [showEditGiftCardCategory, setshowEditGiftCardCategory] =
    useState(false);
  const [showEditGiftCard, setshowEditGiftCard] = useState(false);
  const [currency, setCurrency] = useState();

  const { Option } = Select;

  const handleCurrencyCategory = (value) => {
    setCurrency(value);
  };

  const handleShowCategoryEdit = (val) => {
    editCategoryForm.setFieldsValue({
      title: giftCardCategoryData?.title,
    });
    setshowEditGiftCardCategory(true);
    setImage(giftCardCategoryData?.logo);
  };

  const handleShowGiftcardEdit = (val) => {
    editGiftcardForm.setFieldsValue({
      title: val.title,
      amount: val.amount,
    });
    setCurrency(val.currency);
    setCardId(val._id);
    setshowEditGiftCard(true);
  };

  const handleShowGiftcardDelete = (val) => {
    setCardId(val._id);
    setShowDeleteGiftCard(true);
  };

  const handleShowCategoryDelete = () => {
    setShowDeleteGiftCardCategory(true);
  };

  const handleGetAllGiftCards = async (val) => {
    setShowDrawer(true);
    setIsLoading(true);

    const payload = {
      page: "1",
      perPage: "1000",
      giftCardCategoryId: val._id,
    };
    try {
      const { data } = await getAllGiftCards(payload);
      setgiftCardCategoryData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  // create card category
  async function handleCreateCategory(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      logo: image,
    };
    try {
      const data = await addGiftCardCategory(payload);
      setShowCreateCategoryModal(false);
      notification.open({
        message: "Success",
        description: "Catrgory added",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
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
  const closeDrawer = () => {
    setShowDrawer(false);
    window.location.replace("/");
  };

  // add gift card
  async function handleCreateGiftCard(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      categoryId: giftCardCategoryData._id,
      currency: currency,
    };

    const getpayload = {
      page: "1",
      perPage: "1000",
      giftCardCategoryId: giftCardCategoryData._id,
    };
    try {
      const data = await addGiftCard(payload);
      const { data: categoryData } = await getAllGiftCards(getpayload);
      setgiftCardCategoryData(categoryData);
      setIsLoading(false);
      setShowCreateGiftCardModal(false);
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

  // edit gift card
  async function handleEditGiftCard(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      categoryId: giftCardCategoryData._id,
      currency: currency,
      giftCardId: cardId,
    };

    const getpayload = {
      page: "1",
      perPage: "1000",
      giftCardCategoryId: giftCardCategoryData._id,
    };
    try {
      const data = await updateGiftCard(payload);
      const { data: categoryData } = await getAllGiftCards(getpayload);
      setgiftCardCategoryData(categoryData);
      setshowEditGiftCard(false);
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

  const columns = [
    {
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
      render: (title, card) => card.title,
    },
    {
      title: "Giftcard",
      dataIndex: "giftcard",
      render: (cgiftcard, card) => `${card.giftCards}  categories`,
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, card) => (
        <BiDotsVerticalRounded
          className="menu"
          onClick={() => handleGetAllGiftCards(card)}
        />
      ),
    },
  ];

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

  // create delete category
  async function handleDeleteGiftcardCategory() {
    setIsLoading(true);
    try {
      await deleteGiftCardCategory({
        giftCardCategoryId: giftCardCategoryData._id,
      });

      notification.open({
        message: "Success",
        description: "Crypto deleted",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowDeleteGiftCardCategory(false);
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

  // create delete giftcard
  async function handleDeleteGiftcard() {
    setIsLoading(true);
    const getpayload = {
      page: "1",
      perPage: "1000",
      giftCardCategoryId: giftCardCategoryData._id,
    };
    try {
      await deleteGiftCard({
        giftCardId: cardId,
      });
      const { data: categoryData } = await getAllGiftCards(getpayload);

      notification.open({
        message: "Success",
        description: "Crypto deleted",
        icon: <SmileOutlined style={{ color: "green" }} />,
      });
      setShowDeleteGiftCard(false);
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
  // edit GiftcardCategory
  async function handleEditGiftcardCategory(values) {
    setIsLoading(true);
    const payload = {
      ...values,
      logo: image,
      giftCardCategoryId: giftCardCategoryData?._id,
    };
    try {
      const data = await updateGiftCardCategory(payload);
      const { data: categoryData } = await getAllGiftCards(payload);
      setgiftCardCategoryData(categoryData);
      setshowEditGiftCardCategory(false);
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
      <GiftcardStyles>
        <FlexibleDiv>
          <FlexibleDiv justifyContent="space-between" className="header_wrap">
            <Typography.Title level={2}>Giftcards</Typography.Title>
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
                onClick={() => setShowCreateCategoryModal(true)}
              >
                + Add New Category
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>
          <CustomTable
            func={getAllGiftCardCategories}
            columns={columns}
            searchResults={searchResults}
          />
        </FlexibleDiv>
      </GiftcardStyles>
      <TableDrawer
        visible={showDrawer}
        setDrawer={setShowDrawer}
        closeDrawer={closeDrawer}
      >
        {" "}
        {isLoading ? (
          <FlexibleDiv margin="20px 0 0 0" height="300px">
            <LoadingOutlined />
          </FlexibleDiv>
        ) : (
          <>
            <FlexibleDiv justifyContent="space-between">
              <Typography.Title level={4}>
                {giftCardCategoryData?.title}{" "}
                <img
                  src={giftCardCategoryData?.logo}
                  alt=""
                  className="logoWrap"
                />
              </Typography.Title>
              <FlexibleDiv width="120px" justifyContent="space-between">
                <Button
                  height="50px"
                  boxShadow="none"
                  background="#e0e0e0"
                  hover="#e0e0e0"
                  width="50px"
                  onClick={handleShowCategoryEdit}
                >
                  <FiEdit style={{ fontSize: "20px" }} />
                </Button>
                <Button
                  height="50px"
                  boxShadow="none"
                  background="red"
                  hover="red"
                  width="max-content"
                  onClick={handleShowCategoryDelete}
                >
                  <img src={Trash} alt="" />
                </Button>
              </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv justifyContent="space-between" margin="20px 0 0 0">
              {" "}
              <Button
                height="50px"
                boxShadow="none"
                onClick={() => setShowCreateGiftCardModal(true)}
              >
                + New Giftcard
              </Button>
            </FlexibleDiv>

            <FlexibleDiv flexDir="column" margin="20px 0 0 0">
              {!!giftCardCategoryData?.giftcards?.length ? (
                giftCardCategoryData?.giftcards?.map((item, idx) => (
                  <FlexibleDiv
                    justifyContent="space-between"
                    key={idx}
                    className="drawerItems_wrap"
                  >
                    <span>
                      {item.title}&nbsp; | &nbsp;
                      <b>
                        NGN {item.amount}&nbsp; {getCurrncy(item.currency)}
                      </b>
                    </span>
                    <Popover
                      placement="bottomLeft"
                      content={
                        <>
                          <p
                            style={{ opacity: ".5", cursor: "pointer" }}
                            onClick={() => handleShowGiftcardEdit(item)}
                          >
                            <FiEdit
                              style={{
                                margin: "0 5px -2px 0",
                              }}
                            />
                            Edit
                          </p>
                          <p
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleShowGiftcardDelete(item)}
                          >
                            <RiDeleteBin6Line
                              style={{ margin: "0 5px -2px 0" }}
                            />
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
                  </FlexibleDiv>
                ))
              ) : (
                <FlexibleDiv height="200px">
                  <Typography.Title level={5}>No Data</Typography.Title>
                </FlexibleDiv>
              )}
            </FlexibleDiv>
          </>
        )}
      </TableDrawer>

      {/* create gift card */}
      <ModalWrapper
        visible={showCreateGiftCardModal}
        footer={null}
        closable={true}
        onCancel={() => setShowCreateGiftCardModal(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Giftcard</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={form}
              onFinish={handleCreateGiftCard}
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
                  placeholder="Gift card"
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
                  type="number"
                >
                  <Input
                    prefix={<span className="prefix">NGN</span>}
                    placeholder="Trading rate"
                    background="#F5FCFF"
                    height="50px"
                  />
                </Form.Item>
                <Select
                  className="selectInput"
                  onChange={handleCurrencyCategory}
                  value={currency}
                  width="120px"
                  placeholder="/ $"
                >
                  {currencies.map((value, index) => (
                    <Option value={value.title} key={index}>
                      {value.sign}
                    </Option>
                  ))}
                </Select>
              </FlexibleDiv>
              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>

      {/* Edit gift card */}
      <ModalWrapper
        visible={showEditGiftCard}
        footer={null}
        closable={true}
        onCancel={() => setshowEditGiftCard(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Edit Giftcard</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={editGiftcardForm}
              onFinish={handleEditGiftCard}
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
                  placeholder="Gift card"
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
                  type="number"
                >
                  <Input
                    prefix={<span className="prefix">NGN</span>}
                    placeholder="Trading rate"
                    background="#F5FCFF"
                    height="50px"
                  />
                </Form.Item>
                <Select
                  className="selectInput"
                  onChange={handleCurrencyCategory}
                  value={currency}
                  width="120px"
                  placeholder="/ $"
                >
                  {currencies.map((value, index) => (
                    <Option value={value.title} key={index}>
                      {value.sign}
                    </Option>
                  ))}
                </Select>
              </FlexibleDiv>
              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>

      {/* create category */}
      <ModalWrapper
        visible={showCreateCategoryModal}
        footer={null}
        closable={true}
        onCancel={() => setShowCreateCategoryModal(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Giftcard</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={form}
              onFinish={handleCreateCategory}
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
                  placeholder="Card Category"
                  background="#F5FCFF"
                  height="50px"
                />
              </Form.Item>
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

      {/* edit giftcard category */}
      <ModalWrapper
        visible={showEditGiftCardCategory}
        footer={null}
        closable={true}
        onCancel={() => setshowEditGiftCardCategory(false)}
      >
        <FlexibleDiv flexDir="column">
          <Typography.Title level={5}>Edit GiftcardCategory</Typography.Title>
          <FlexibleDiv margin="30px 0">
            <Form
              form={editCategoryForm}
              onFinish={handleEditGiftcardCategory}
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
                  placeholder="Card Category"
                  background="#F5FCFF"
                  height="50px"
                />
              </Form.Item>
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

      {/* delete giftcard category */}
      <ModalWrapper
        visible={showDeleteGiftCardCategory}
        footer={null}
        closable={true}
        onCancel={() => setShowDeleteGiftCardCategory(false)}
      >
        <FlexibleDiv flexDir="column" height="250px">
          <Typography.Title level={5}>
            Are you sure you want to delete this Category
          </Typography.Title>
          <Button
            type="primary"
            htmlType="submit"
            width="200px"
            height="45px"
            loading={isLoading}
            onClick={handleDeleteGiftcardCategory}
          >
            Delete
          </Button>
        </FlexibleDiv>
      </ModalWrapper>

      {/* delete giftcard  */}
      <ModalWrapper
        visible={showDeleteGiftCard}
        footer={null}
        closable={true}
        onCancel={() => setShowDeleteGiftCard(false)}
      >
        <FlexibleDiv flexDir="column" height="250px">
          <Typography.Title level={5}>
            Are you sure you want to delete this giftcard
          </Typography.Title>
          <Button
            type="primary"
            htmlType="submit"
            width="200px"
            height="45px"
            loading={isLoading}
            onClick={handleDeleteGiftcard}
          >
            Delete
          </Button>
        </FlexibleDiv>
      </ModalWrapper>
    </DashboardLayout>
  );
}

export default Giftcard;
