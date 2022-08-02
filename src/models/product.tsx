export interface IProduct  {
    _id?: number | string,
    slug?: string,
    name: string,
    price: number,
    img?: string,
    quantity?: number,
    description?: string
    category: string
}