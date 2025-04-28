import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, RefreshCw } from 'lucide-react';
import { currencies } from '../data/mockData';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Tabela fixa de valores em relação ao BRL
const fixedRates: Record<string, number> = {
  BRL: 1,
  USD: 5.65,
  EUR: 6.46,
  GBP: 7.60,
  // Adicione mais moedas conforme precisar
};

const fetchFixedRate = async (from: string, to: string): Promise<number> => {
  const fromRate = fixedRates[from];
  const toRate = fixedRates[to];

  if (fromRate === undefined || toRate === undefined) {
    console.warn(`Taxa não encontrada para ${from} ou ${to}`);
    return 1; // Se não encontrar, assume taxa neutra
  }
  return toRate / fromRate;
};
  

const convertCurrency = async () => {
  setIsLoading(true);

  try {
    const rate = await fetchFixedRate(fromCurrency, toCurrency);
    const converted = (parseFloat(amount) / rate).toFixed(2);
    setResult(converted);
  } catch (error) {
    setResult('Erro');
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Conversor de Moedas</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Valor para Conversão</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            min="0"
            placeholder="Digite o valor"
          />
        </div>

        <div className="flex items-center gap-4 w-full">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">De</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSwap}
            className="p-4 rounded-full hover:bg-blue-50 transition-all duration-300 mt-6"
          >
            <ArrowRightLeft className="w-6 h-6 text-blue-600" />
          </button>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">Para</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-2">Resultado da Conversão</p>
            <p className="text-3xl font-bold text-blue-600">
              {isLoading ? (
                <RefreshCw className="w-6 h-6 animate-spin" />
              ) : (
                `${amount} ${fromCurrency} = ${result} ${toCurrency}`
              )}
            </p>
          </div>
          <button
            onClick={convertCurrency}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );
}
