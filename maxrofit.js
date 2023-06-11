/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

let maxProfit

maxProfit = (prices = []) => {
  if (!prices.length) return 0

  let profit = 0,
    buy = prices[0]

  for (let l = 0; l < prices.length; l++) {
    // if this val is less than the current best buy, use it
    buy = Math.min(buy, prices[l])
    // if this val is a better sell than the previous best, use it
    profit = Math.max(profit, prices[l] - buy)
  }

  return profit
}

maxProfit([7, 1, 5, 3, 6, 4]) // 5

maxProfit([7, 6, 4, 3, 1]) // 0
