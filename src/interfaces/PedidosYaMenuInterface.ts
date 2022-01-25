

    export interface Images {
        isCustomized: boolean;
        urls: string[];
    }

    export interface Price {
        currency: string;
        currencyMask: string;
        discount?: unknown;
        finalPrice: number;
        originalPrice?: unknown;
    }

    export interface Tags {
        foodCategories: string[];
        hasOptions: boolean;
        isFavourite: boolean;
        isMostOrdered: boolean;
        isRecommended: boolean;
        requiresAgeCheck: boolean;
    }

    export interface Product {
        description: string;
        id: string;
        images: Images;
        legacyId: number;
        maxQuantity?: unknown;
        name: string;
        price: Price;
        rating: number;
        tags: Tags;
    }

    export interface Section {
        id: string;
        images: unknown[];
        index: number;
        legacyId: number;
        name: string;
        products: Product[];
        requiresAgeCheck: boolean;
    }

    export interface RootObject {
        globalDiscounts?: unknown;
        id: string;
        legacyId: number;
        name: string;
        sections: Section[];
    }


