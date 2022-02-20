import { handleError } from "../utils/functionHelpers";
import instance from "./axios";

const getReciepts = async function (query) {
  try {
    const { data } = await instance.get(`/subscription/receipts?` + query);

    return data;
  } catch (error) {
    handleError(error);
  }
};

const subscribeUser = async (payload) => {
  const { data } = await instance.post("/subscription", payload);

  return data;
};

export { subscribeUser, getReciepts };
