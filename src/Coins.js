import React, { useEffect, useState } from 'react';

function App4() {
  const [loading, SetLoading] = useState(true);
  const [coins, setCoins] = useState([]); //빈값이면 coins.length를 호출할때 undefined가 뜬다
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        SetLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>'Loading...'</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name}({coin.symbol}):{coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App4;
