import React from 'react';

export default function CoinDisplay(props) {
  const { img, name, price, twentyFourHourChange, marketCap } = props;

  const formatNumberWithGap = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const formattedMarketCap = formatNumberWithGap(marketCap);
  const changeColor = twentyFourHourChange < 0 ? 'red' : '#0ecb81';

  return (
    <div className="coin-row">
      <div className="coin-name">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="coin-price">
        <p>${price}</p>
      </div>
      <div className="coin-change">
        <p style={{ color: changeColor }}>{twentyFourHourChange}%</p>
      </div>
      <div className="coin-market-cap">
        <p>${formattedMarketCap}</p>
      </div>
    </div>
  );
}