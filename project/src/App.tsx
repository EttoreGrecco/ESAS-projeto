import React from 'react';
import { Globe2 } from 'lucide-react';
import CurrencyConverter from './components/CurrencyConverter';
import DestinationCard from './components/DestinationCard';
import { destinations } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-10 h-10" />
            <h1 className="text-4xl font-bold">ViagemCâmbio</h1>
          </div>
          <h2 className="text-5xl font-bold mb-6 max-w-2xl">
            Encontre Seu Próximo Destino Econômico
          </h2>
          <p className="text-xl text-blue-100 max-w-xl">
            Compare taxas de câmbio e descubra destinos acessíveis para viajar
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Currency Converter Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <CurrencyConverter />
        </section>

        {/* Recommended Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Destinos Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-8 h-8" />
            <span className="text-2xl font-bold">ViagemCâmbio</span>
          </div>
          <p className="text-gray-400 max-w-xl">
            Encontre as melhores taxas de câmbio para sua próxima aventura
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;