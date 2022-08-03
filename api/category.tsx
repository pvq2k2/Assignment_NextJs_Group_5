
import { ICategory } from "../src/models/category";
import instance from "./config";

export const getAllCategory = (): Promise<ICategory[]> => {
    const url = "/category";
    return instance.get(url);
}

export const readCategory = (id: number | string): Promise<ICategory> => {
    const url = `/category/${id}`;
    return instance.get(url);
}

export const createCategory = (category: ICategory): Promise<ICategory> => {
    const url = `/category`;
    return instance.post(url, category);
}

export const updateCategory = (category: ICategory): Promise<ICategory> => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}

export const removeCategory = (id: number | string): Promise<ICategory> => {
    const url = `/category/${id}`;
    return instance.delete(url);
}