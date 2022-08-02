
import { IUser } from "../src/models/user";
import instance from "./config";

export const getAllUser = (): Promise<IUser[]> => {
    const url = "/user";
    return instance.get(url);
}

export const readUser = (id: number | string): Promise<IUser> => {
    const url = `/user/${id}`;
    return instance.get(url);
}

export const createUser = (user: IUser): Promise<IUser> => {
    const url = `/user`;
    return instance.post(url, user);
}

export const updateUser = (user: IUser): Promise<IUser> => {
    const url = `/user/${user._id}`;
    return instance.put(url, user);
}

export const removeUser = (id: number | string): Promise<IUser> => {
    const url = `/user/${id}`;
    return instance.delete(url);
}