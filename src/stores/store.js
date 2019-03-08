import TransactionStore from "stores/transaction.store";

class Store {
  constructor() {
    this.transactionStore = new TransactionStore();
  }
}

export default new Store();
