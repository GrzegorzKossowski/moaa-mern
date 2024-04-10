export type TReview = {
    id: string;
    name: string;
    comment: string;
    rating: number;
    user: string;
    createdAt: string;
    updatedAt: string;
};
export type TProduct = {
    id: string;
    user: string;
    name: string;
    brand: string;
    countInStock: number;
    category: string;
    description: string;
    images: string[];
    numReviews: number;
    price: number;
    productIsNew: boolean;
    rating: number;
    reviews: TReview[];
    subtitle: string;
    createdAt: string;
    updatedAt: string;
};
