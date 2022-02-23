import React, { useState } from "react"
import DashboardLayout from "../../../components/Layout"
import Input from "../../../components/TextField"
import Select from "../../../components/Select"
import { FlexibleDiv } from "../../../components/Box/styles"
import { Typography, Popover, notification, Form } from "antd"
import Button from "../../../components/Button"
import CustomTable from "../../../components/Table"
import { BiDotsVerticalRounded, BiSearch } from "react-icons/bi"
import { CryptoStyles } from "./styles"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { addCrypto, getAllCrypto } from "../../../network/crypto"
import { ModalWrapper } from "../../../components/ModalStylesWrap"
import { SmileOutlined, LoadingOutlined } from "@ant-design/icons"

function Crypto() {
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState()
  const [showDrawer, setShowDrawer] = useState(true)
  const [showAddNewCrypto, setShowAddNewCrypto] = useState(false)
  const [showDeleteCrypto, setShowDeleteCrypto] = useState(false)
  const [showEditCrypto, setShowEditCrypto] = useState(false)
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)

  const content = (
    <>
      <p style={{ opacity: ".5" }} onClick={() => setShowEditCrypto(true)}>
        <FiEdit style={{ margin: "0 5px -2px 0" }} />
        Edit
      </p>
      <p style={{ color: "red" }} onClick={() => setShowDeleteCrypto(true)}>
        <RiDeleteBin6Line style={{ margin: "0 5px -2px 0" }} />
        Delete
      </p>
    </>
  )

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Amount",
      dataIndex: "amount",
    },

    {
      title: "Currency",
      dataIndex: "currency",
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, user) => (
        <Popover
          placement="bottomLeft"
          // title={text}
          content={content}
          trigger="click"
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
  ]

  // create card category
  async function handleCreateNewCrypto(values) {
    setIsLoading(true)
    const payload = {
      ...values,
    }
    try {
      const data = await addCrypto(payload)
      setShowAddNewCrypto(false)
      notification.open({
        message: "Success",
        description: "Crypto added",
        icon: <SmileOutlined style={{ color: "green" }} />,
      })
      setIsLoading(false)
    } catch (error) {
      if (error.response) {
        notification.open({
          message: "Error",
          description: error.response.data.message,
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
      } else {
        notification.open({
          message: "Error",
          description:
            "There was an issue with your network. Pls try again later",
          icon: <SmileOutlined style={{ color: "red" }} />,
        })
        setIsLoading(false)
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
              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input
                  placeholder="Amount"
                  background="#F5FCFF"
                  height="50px"
                />
              </Form.Item>
              <Form.Item
                name="currency"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  placeholder="Currency"
                  background="#F5FCFF"
                  height="50px"
                >
                  <Select.Option value="USD">USD</Select.Option>
                  <Select.Option value="EURO">EURO</Select.Option>
                  <Select.Option value="POUNDS">POUNDS</Select.Option>
                </Select>
              </Form.Item>
              <Button type="primary" htmlType="submit" width="100%">
                {isLoading && <LoadingOutlined />}
                Save
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </ModalWrapper>
    </DashboardLayout>
  )
}

export default Crypto
