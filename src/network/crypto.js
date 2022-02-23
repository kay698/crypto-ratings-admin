import instance from "./axios";

export const addCrypto = async function (payload) {
  const { data } = await instance.post(`/crypto/create`, payload);
  return data;
};

export const updateCrypto = async function (payload) {
  const { data } = await instance.put(`/crypto/update`, payload);
  return data;
};

export const getAllCrypto = async function (payload) {
  const data = await instance.get(
    `/crypto?page=${payload.page}&perPage=${payload.perPage}`
  );
  return data;
};

export const getSingleCrypto = async function (cryptoId) {
  const { data } = await instance.get(`/crypto/${cryptoId}`);
  return data;
};

export const deleteCrypto = async function (payload) {
  const { data } = await instance.delete(`/crypto/delete`, payload);
  return data;
};
