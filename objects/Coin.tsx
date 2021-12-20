export class Coin {
    name: string
    tag: string
    transactions: object

    constructor(name: string, tag: string) {
        this.name = name
        this.tag = tag
        this.transactions = []
    }
}
