import instance from "./axios";

const addProduct = async function (payload) {
  const { data } = await instance.post(`products/create`, payload);
  return data;
};

const uploadFile = async function (file) {
  const data = await instance.post(`/media/create`, file);
  return data;
};

const getAllProducts = async function (payload) {
  const { data } = await instance.get(
    `/products/list/${payload.businessId}?page=${payload.page}&perPage=${payload.perPage}`
  );
  return data;
};

const getSingleProduct = async function (productId) {
  const { data } = await instance.get(`/products/${productId}`);
  return data;
};

const updateSingleProduct = async function (payload, productId) {
  const { data } = await instance.put(`/products/${productId}`, payload);
  return data;
};

const deleteSingleProduct = async function (payload) {
  const { data } = await instance.delete(`/products/${payload.productId} `);
  return data;
};

const getProductByCategory = async function (payload) {
  const { data } = await instance.get(
    `/products/${payload.businessId}/categories?category=${payload.category}`
  );
  return data;
};

const createCategory = async function (businessId, payload) {
  const { data } = await instance.post(
    `/business/${businessId}/categories`,
    payload
  );
  return data;
};

const fetchAllCategories = async function (businessId) {
  const { data } = await instance.get(`/business/${businessId}/categories`);
  return data;
};

export {
  addProduct,
  uploadFile,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  createCategory,
  fetchAllCategories,
  getProductByCategory,
};
