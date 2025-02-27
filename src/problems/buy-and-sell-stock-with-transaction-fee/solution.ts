const maxProfit = (prices: number[], fee: number): number => {
  let cash = 0;
  let hold = -Infinity;

  for (const stockPrice of prices) {
    // hold the cash, or sell stock.
    cash = cash >= hold + stockPrice - fee ? cash : hold + stockPrice - fee;

    // hold stock or buy stock. (we buy the first stock)
    hold = hold >= cash - stockPrice ? hold : cash - stockPrice;
  }

  return cash;
};

export default maxProfit;
