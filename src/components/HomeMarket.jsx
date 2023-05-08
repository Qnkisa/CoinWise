import React, { useState, useEffect } from 'react';
import CoinDisplay from './CoinDisplay';

export default function HomeMarket() {
  const [currencies, setCurrencies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [activeGroup, setActiveGroup] = useState(1);

  const fetchCurrencies = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false`
      );
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const renderCoins = () => {
    return currencies.slice(startIndex, endIndex).map((coin, index) => {
      const change = parseFloat(coin.price_change_percentage_24h).toFixed(2);
      return (
        <CoinDisplay
          key={coin.id}
          img={coin.image}
          name={coin.name}
          price={coin.current_price}
          twentyFourHourChange={change}
          marketCap={coin.market_cap}
        />
      );
    });
  };

  const handleGroupClick = (start, end, groupName) => {
    setStartIndex(start);
    setEndIndex(end);
    setActiveGroup(groupName);
  };

  return (
    <section className="home-market" id="home-market">
      <div className="home-market-helper">
        <h2>Current Market</h2>
        <div className="market-coin-info">
          <p>Coin</p>
          <p>Price</p>
          <p>24h change</p>
          <p>Market Cap</p>
        </div>
        <div className='market-coin-div'>
          {renderCoins()}
        </div>
        <div className='market-button-div'>
          <button
            onClick={() => handleGroupClick(0, 5, 1)}
            className={activeGroup === 1 ? 'market-active-button' : '' }
          >
            1
          </button>
          <button
            onClick={() => handleGroupClick(5, 10, 2)}
            className={activeGroup === 2 ? 'market-active-button' : '' }
          >
            2
          </button>
          <button
            onClick={() => handleGroupClick(10, 15, 3)}
            className={activeGroup === 3 ? 'market-active-button' : '' }
          >
            3
          </button>
          <button
            onClick={() => handleGroupClick(15, 20, 4)}
            className={activeGroup === 4 ? 'market-active-button' : '' }
          >
            4
          </button>
          <button
            onClick={() => handleGroupClick(20, 25, 5)}
            className={activeGroup === 5 ? 'market-active-button' : '' }
          >
            5
          </button>
        </div>
      </div>
    </section>
  );
}