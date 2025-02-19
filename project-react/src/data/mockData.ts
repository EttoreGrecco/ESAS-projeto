import { Currency, Destination, Testimonial } from '../types';

export const currencies: Currency[] = [
  { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$' },
  { code: 'USD', name: 'Dólar Americano', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£' },
  { code: 'JPY', name: 'Iene Japonês', symbol: '¥' },
];

export const destinations: Destination[] = [
  {
    id: '1',
    country: 'Argentina',
    city: 'Buenos Aires',
    imageUrl: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e',
    description: 'Capital cosmopolita com rica cultura e ótimo custo-benefício',
    exchangeRate: 820.5,
    currency: 'ARS'
  },
  {
    id: '2',
    country: 'Bolívia',
    city: 'La Paz',
    imageUrl: 'https://images.unsplash.com/photo-1547235001-d703406d3f17',
    description: 'Paisagens deslumbrantes e cultura andina a preços acessíveis',
    exchangeRate: 6.90,
    currency: 'BOB'
  },
  {
    id: '3',
    country: 'Colômbia',
    city: 'Medellín',
    imageUrl: 'https://images.unsplash.com/photo-1593030668930-8130ab5fbf32',
    description: 'Cidade da eterna primavera com custo de vida baixo',
    exchangeRate: 3950,
    currency: 'COP'
  },
  {
    id: '4',
    country: 'Vietnã',
    city: 'Ho Chi Minh',
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    description: 'Gastronomia incrível e hospedagem econômica',
    exchangeRate: 24800,
    currency: 'VND'
  },
  {
    id: '5',
    country: 'Indonésia',
    city: 'Bali',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    description: 'Paraíso tropical com preços acessíveis',
    exchangeRate: 15900,
    currency: 'IDR'
  },
  {
    id: '6',
    country: 'Camboja',
    city: 'Siem Reap',
    imageUrl: 'https://images.unsplash.com/photo-1600820641814-455f8c53f2df',
    description: 'Templos históricos e cultura fascinante',
    exchangeRate: 4150,
    currency: 'KHR'
  },
  {
    id: '7',
    country: 'Índia',
    city: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    description: 'Praias paradisíacas e cultura milenar',
    exchangeRate: 84.5,
    currency: 'INR'
  },
  {
    id: '8',
    country: 'Marrocos',
    city: 'Marrakech',
    imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f89',
    description: 'Mercados exóticos e arquitetura deslumbrante',
    exchangeRate: 10.2,
    currency: 'MAD'
  },
  {
    id: '9',
    country: 'Paraguai',
    city: 'Assunção',
    imageUrl: 'https://images.unsplash.com/photo-1578089336197-6e0694d2d31e',
    description: 'Compras com ótimo custo-benefício',
    exchangeRate: 7350,
    currency: 'PYG'
  },
  {
    id: '10',
    country: 'Sri Lanka',
    city: 'Colombo',
    imageUrl: 'https://images.unsplash.com/photo-1586047275553-21c36e8de760',
    description: 'Praias paradisíacas e safáris econômicos',
    exchangeRate: 325.8,
    currency: 'LKR'
  }
];