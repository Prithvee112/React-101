import React, { useState } from 'react';

const InputBox = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');

  const apiKey = 'r2O05EEVUXPf3L3izFFokw8cPKjCc7y4';

  const handleConvert = async () => {
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${fromAmount}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setToAmount(data.result);
  };

  const currencies = [
    'USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="0"
            className="border p-2 rounded mb-2 w-full"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => { 
            const temp = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(temp);
          }} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Swap
        </button>
        <div className="flex flex-col items-center mb-4">
          <input
            type="number"
            value={toAmount}
            readOnly
            placeholder="0"
            className="border p-2 rounded mb-2 w-full"
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConvert}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Convert {fromCurrency} to {toCurrency}
        </button>
      </div>
    </div>
  );
};

export default InputBox;
