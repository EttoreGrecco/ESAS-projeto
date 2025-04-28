export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

export interface Destination {
  id: string;
  country: string;
  city: string;
  imageUrl: string;
  description: string;
  exchangeRate: number;
  currency: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  comment: string;
  rating: number;
  date: string;
}