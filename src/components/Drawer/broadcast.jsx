import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  message,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import { sendBroadcastMessage } from "../../network/broadcast";
import { getUsersOnMessenger } from "../../network/users";
import { handleError } from "../../utils/functionHelpers";
import CustomTable from "../Table";
import { BroadcastDrawerStyles } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import { LoadingOutlined } from "@ant-design/icons";
import UploadImageIcon from "../../assets/pngs/uploadImage.png";

export const BroadcastDrawer = ({ visible, setDrawer }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [pictureLoading, setPictureLoading] = useState(false);
  const [image, setImage] = useState(false);

  async function handleOnFormSubmit(values) {
    try {
      if (selectedUsers.length === 0)
        return message.error(
          "You need to select at least one user to send a template message."
        );

      setIsLoading(true);

      const users = selectedUsers.map((selectedUser) => {
        return {
          id: selectedUser._id,
          facebookPsid: selectedUser.facebookPsid,
        };
      });

      setDrawer(false);

      const payload = Object.assign(values, { users });
      const response = await sendBroadcastMessage(payload);

      message.success(response);
      setIsLoading(false);
      form.resetFields();
    } catch (error) {
      handleError(error);
      setIsLoading(false);
    }
  }

  const usersColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, user) => user.name,
    },
    {
      title: "PSID",
      dataIndex: "facebookPsid",
      key: "facebookPsid",
    },
  ];

  return (
    <BroadcastDrawerStyles
      title="Send Broadcast Message"
      width={700}
      onClose={() => setDrawer(false)}
      visible={visible}
    >
      <Form
        form={form}
        onFinish={handleOnFormSubmit}
        layout="vertical"
        scrollToFirstError={true}
      >
        <Form.Item
          name="channel"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Select placeholder="Select Channel">
            <Select.Option value="MESSENGER">MESSENGER</Select.Option>
            <Select.Option value="MESSENGER">INSTAGRAM</Select.Option>
            <Select.Option value="WEB">WEB</Select.Option>
            <Select.Option value="ALL">ALL CHANNELS</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Message about marketing or broadcast information goes here."
            rows={3}
          />
        </Form.Item>
        {/* <FlexibleDiv
          width="120px"
          flexDir="column"
          className=" addImageSection"
        >
          <Typography.Text className="label">Upload Image</Typography.Text>

          {pictureLoading ? (
            <LoadingOutlined />
          ) : (
            <>
              {" "}
              <label htmlFor="addProductImage" className={"addImage"}>
                <FlexibleDiv
                  className="imageWrap"
                  width="max-content"
                  height="max-content"
                >
                  <Tooltip title="click to select" placement="bottom">
                    <img src={image || UploadImageIcon} alt="" />
                  </Tooltip>
                </FlexibleDiv>
              </label>
              <Input
                hidden
                type="file"
                id={"addImage"}
                name="file"
                // onChange={handleImage}
              />{" "}
            </>
          )}
        </FlexibleDiv> */}

        <Divider />

        <CustomTable
          func={getUsersOnMessenger}
          columns={usersColumn}
          defaultPageSize={50}
          setSelectedData={setSelectedUsers}
        />
        <Button loading={isLoading} htmlType="submit" className="saveMessage">
          Save Message
        </Button>

        <Button loading={isLoading} htmlType="submit">
          Send
        </Button>
      </Form>
    </BroadcastDrawerStyles>
  );
};
