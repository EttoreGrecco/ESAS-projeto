import { Currency, Destination, Testimonial } from '../types';

export const currencies: Currency[] = [
  { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$'},
  { code: 'USD', name: 'Dólar Americano', symbol: '$'},
  { code: 'EUR', name: 'Euro', symbol: '€'},
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£'},
];

export const destinations: Destination[] = [
  {
    id: '1',
    country: 'Argentina',
    city: 'Buenos Aires',
    imageUrl: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e',
    description: 'Capital cosmopolita com rica cultura e ótimo custo-benefício',
    exchangeRate: 208.27,
    currency: 'ARS'
  },
  {
    id: '2',
    country: 'Bolívia',
    city: 'La Paz',
    imageUrl: 'https://images.unsplash.com/photo-1547235001-d703406d3f17',
    description: 'Paisagens deslumbrantes e cultura andina a preços acessíveis',
    exchangeRate: 1.22,
    currency: 'BOB'
  },
  {
    id: '3',
    country: 'Colômbia',
    city: 'Medellín',
    imageUrl: 'https://dicasdacolombia.com.br/wp-content/uploads/sites/22/2018/12/laguna-guatape-medellin-jpg.webp',
    description: 'Cidade da eterna primavera com custo de vida baixo',
    exchangeRate: 740.86,
    currency: 'COP'
  },
  {
    id: '4',
    country: 'Vietnã',
    city: 'Ho Chi Minh',
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    description: 'Gastronomia incrível e hospedagem econômica',
    exchangeRate: 4597.46,
    currency: 'VND'
  },
  {
    id: '5',
    country: 'Indonésia',
    city: 'Bali',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    description: 'Paraíso tropical com preços acessíveis',
    exchangeRate: 2971.69,
    currency: 'IDR'
  },
  {
    id: '6',
    country: 'Camboja',
    city: 'Siem Reap',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/75/cambodia.jpg?w=1200&h=700&s=1',
    description: 'Templos históricos e cultura fascinante',
    exchangeRate: 708.06,
    currency: 'KHR'
  },
  {
    id: '7',
    country: 'Índia',
    city: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    description: 'Praias paradisíacas e cultura milenar',
    exchangeRate: 15.09,
    currency: 'INR'
  },
  {
    id: '8',
    country: 'Marrocos',
    city: 'Marrakech',
    imageUrl: 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/02/capital-do-marrocos.jpg',
    description: 'Mercados exóticos e arquitetura deslumbrante',
    exchangeRate: 1.64,
    currency: 'MAD'
  },
  {
    id: '9',
    country: 'Paraguai',
    city: 'Assunção',
    imageUrl: 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/assuncao-paraguai.jpg',
    description: 'Compras com ótimo custo-benefício',
    exchangeRate: 1416.99,
    currency: 'PYG'
  }
];