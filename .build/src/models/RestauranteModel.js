"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RestauranteModel {
    constructor(name, restaurantId, deliveryTimeMaxMinutes, deliveryTimeMinMinutes, opened, generalScore, link, nextHour, nextHourClose, shippingAmount, logo, products) {
        this.name = name;
        this.restaurantId = restaurantId;
        this.deliveryTimeMaxMinutes = deliveryTimeMaxMinutes;
        this.deliveryTimeMinMinutes = deliveryTimeMinMinutes;
        this.opened = opened;
        this.generalScore = generalScore;
        this.link = link;
        this.nextHour = nextHour;
        this.nextHourClose = nextHourClose;
        this.shippingAmount = shippingAmount;
        this.logo = logo;
        this.products = products;
    }
}
exports.default = RestauranteModel;
//# sourceMappingURL=RestauranteModel.js.map