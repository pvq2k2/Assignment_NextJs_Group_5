
import { ISlide } from "../src/models/slide";
import instance from "./config";

export const getAllSlide = (): Promise<ISlide[]> => {
    const url = "/slide";
    return instance.get(url);
}

export const readSlide = (id: string | number): Promise<ISlide> => {
    const url = `/slide/${id}`;
    return instance.get(url);
}

export const createSlide = (slide: ISlide): Promise<ISlide> => {
    const url = `/slide`;
    return instance.post(url, slide);
}

export const updateSlide = (slide: ISlide): Promise<ISlide> => {
    const url = `/slide/${slide._id}`;
    return instance.put(url, slide);
}

export const removeSlide = (id: string | number): Promise<ISlide> => {
    const url = `/slide/${id}`;
    return instance.delete(url);
}