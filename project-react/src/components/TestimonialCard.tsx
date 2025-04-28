import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-4 text-lg italic">"{testimonial.comment}"</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-blue-600">{testimonial.name}</p>
          <p className="text-sm text-gray-500">de {testimonial.country}</p>
        </div>
        <p className="text-sm text-gray-500">{testimonial.date}</p>
      </div>
    </div>
  );
}