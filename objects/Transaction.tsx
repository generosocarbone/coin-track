export class Transaction {
  date: string
  amount: string
  spent: string
  fees: string

  constructor(date: string, amount: string, spent: string, fees: string) {
    this.date = date;
    this.amount = amount;
    this.spent = spent;
    this.fees = fees;
  }
}
