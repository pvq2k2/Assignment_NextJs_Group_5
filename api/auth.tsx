import { IUser } from "../src/models/user";
import instance from "./config";

export const signin = (user: IUser): Promise<IUser> => {
    const url = `/signin`;
    return instance.post(url, user);
}

export const signup = (user: IUser): Promise<IUser> => {
    const url = `/signup`;
    return instance.post(url, user);
}
