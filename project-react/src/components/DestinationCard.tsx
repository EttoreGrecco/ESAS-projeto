import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { Destination } from '../types';

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={`${destination.city}, ${destination.country}`}
          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <h3 className="text-xl font-semibold">
              {destination.city}, {destination.country}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 h-12">{destination.description}</p>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">
            1 BRL = {destination.exchangeRate} {destination.currency}
          </span>
        </div>
      </div>
    </div>
  );
}