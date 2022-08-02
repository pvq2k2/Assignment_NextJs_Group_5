import { IProduct } from "../src/models/product";
import instance from "./config";

export const getAllProduct = (): Promise<IProduct[]> => {
    const url = "/product";
    return instance.get(url);
}

export const readProduct = (id: number | string): Promise<IProduct> => {
    const url = `/product/${id}`;
    return instance.get(url);
}

export const createProduct = (product: IProduct): Promise<IProduct> => {
    const url = `/product`;
    return instance.post(url, product);
}

export const updateProduct = (product: IProduct): Promise<IProduct> => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}

export const removeProduct = (id: number | string) => {
    const url = `/product/${id}`;
    return instance.delete<IProduct>(url);
}