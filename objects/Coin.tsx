import {Transaction} from "./Transaction";

export class Coin {
  name: string
  tag: string
  transactions: Array<Transaction>

  constructor(name: string, tag: string) {
    this.name = name
    this.tag = tag
    this.transactions = []
  }

  calculateSpent(): object {
    return {
      spent: 0.00,
      fees: 0.00
    }
  }
}
