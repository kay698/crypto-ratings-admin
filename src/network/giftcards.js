import instance from "./axios";

export const addGiftCard = async function (payload) {
  const { data } = await instance.post(`/gift-cards/create`, payload);
  return data;
};
export const addGiftCardCategory = async function (payload) {
  const { data } = await instance.post(`/gift-cards/category/create`, payload);
  return data;
};

export const updateGiftCard = async function (payload, productId) {
  const { data } = await instance.put(`/products/${productId}`, payload);
  return data;
};

export const getAllGiftCards = async function (payload) {
  const { data } = await instance.get(
    `/gift-cards?page=${payload.page}&perPage=${payload.perPage}`
  );
  return data;
};

export const getSingleGiftCard = async function (productId) {
  const { data } = await instance.get(`/products/${productId}`);
  return data;
};

export const deleteGiftCard = async function (payload) {
  const { data } = await instance.delete(`/gift-cards/delete`, payload);
  return data;
};

export const deleteGiftCardCategory = async function (payload) {
  const { data } = await instance.delete(
    ` /gift-cards/category/delete`,
    payload
  );
  return data;
};
