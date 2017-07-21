"use strict";
var CoinCrawler = require("./CoinCrawler");

module.exports = class CoinAPI {
  constructor() {
    this.coins = {};
    this.initialized = false
  }

  refresh(finishedCallback, errorCallback) {
    var self = this;
    var crawler = new CoinCrawler(function (coin) {
        if (Object.keys(coin).length > 0) {
          self.coins[coin.symbol] = coin
        }
      },
      errorCallback,
      finishedCallback)
  }

  getCoin(coin) {
    if (this.coins[coin]) {
      return this.coins[coin]
    }
    else {
      return null
    }
  }
};
