export type TProductCard = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
  }
}