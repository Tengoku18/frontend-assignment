export {};

declare global {
  interface Rating {
    rate: number;
    count: number;
  }

  interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image: string;
    rating?: Rating;
  }
}
