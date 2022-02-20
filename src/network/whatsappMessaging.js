import { handleError } from "../utils/functionHelpers";
import instance from "./axios";

const getWhatsappData = async function () {
  try {
    const { data } = await instance.get("/whatsapp/messaging");

    return data;
  } catch (error) {
    handleError(error);
  }
};

const getTopupHistory = async function (query) {
  try {
    const { data } = await instance.get(
      "/whatsapp/wallet/top-up-history?" + query
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};

const uploadWhatsappToken = async function (query, payload) {
  try {
    const { data } = await instance.post(
      `/whatsapp/integrate?` + query,
      payload
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};

const uploadFacebookToken = async function (payload) {
  try {
    const { data } = await instance.post(`/facebook/integrate`, payload);

    return data;
  } catch (error) {
    handleError(error);
  }
};

const getWhatsappProfile = async function (payload) {
  try {
    const data = await instance.get(`/whatsapp/profile`);

    return data;
  } catch (error) {
    handleError(error);
  }
};

const updateWhatsappProfile = async function (payload) {
  try {
    const data = await instance.get(`/whatsapp/profile`, payload);

    return data;
  } catch (error) {
    handleError(error);
  }
};
export {
  getWhatsappData,
  getTopupHistory,
  uploadWhatsappToken,
  uploadFacebookToken,
  getWhatsappProfile,
  updateWhatsappProfile,
};
