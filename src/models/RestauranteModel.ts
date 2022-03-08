import ProductoModel from "./ProductoModel";

export default class RestauranteModel {
  constructor(
    public name: string,
    public restaurantId: string,
    public deliveryTimeMaxMinutes: number,
    public deliveryTimeMinMinutes: number,
    public generalScore: number,
    public link: string,
    public nextHour: string,
    public nextHourClose: string,
    public shippingAmount: number,
    public logo: string,
    public products: ProductoModel[] | undefined
  ) {}
}
