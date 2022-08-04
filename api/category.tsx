
import { ICategory } from "../src/models/category";
import instance from "./config";

export const getAllCategory = (): Promise<ICategory[]> => {
    const url = "/category";
    return instance.get(url);
}

export const readCategory = (slug: string): Promise<ICategory> => {
    const url = `/category/${slug}`;
    return instance.get(url);
}

export const createCategory = (category: ICategory): Promise<ICategory> => {
    const url = `/category`;
    return instance.post(url, category);
}

export const updateCategory = (category: ICategory): Promise<ICategory> => {
    const url = `/category/${category.slug}`;
    return instance.put(url, category);
}

export const removeCategory = (slug: string): Promise<ICategory> => {
    const url = `/category/${slug}`;
    return instance.delete(url);
}