import { type Product } from "../../Types";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../utility/services/service.ts";

const BASE_URL = "/product";

export const fetchProducts = () => getRequest<Product[]>(BASE_URL);

export const fetchProductById = (id: string) =>
  getRequest<Product>(`${BASE_URL}/${id}`);

export const createProduct = (data: Product) =>
  postRequest<Product,Product>(BASE_URL, data);

export const updateProduct = (id: string, data: Product) =>
  putRequest<Product,Product>(`${BASE_URL}/${id}`, data);

export const deleteProduct = (id: string) =>
  deleteRequest(`${BASE_URL}/${id}`);
