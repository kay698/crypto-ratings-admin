import instance from "./axios";

const searchRecipe = async (query) => {
  const { data } = await instance.post("/recipes/search", query);

  return data;
};

const searchProduct = async (query) => {
  const { data } = await instance.post("/products/search", query);

  return data;
};

export { searchRecipe, searchProduct };
