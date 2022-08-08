import instance from "./config";


export const getAllCart = () => {
        const url = `/carts`;
        return instance.get(url)
}
export const createCart = (cart: any) =>{
        const url = `/carts`;
        return instance.post(url, cart)
}
export const updateCart = (cart: any) =>{
        const url = `/carts/${cart._id}`;
        return instance.put(url,cart)
}
export const removeCart = (id : any) =>{
        const url = `/carts/${id}`;
        return instance.delete(url)
}
export const readCart = (id : any) =>{
        const url = `/carts/${id}`;
        return instance.get(url)
}