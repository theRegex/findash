import { observable, action } from "mobx";
import { db } from "services/firebase";

class TransactionStore {
  @observable transactions = [];

  headers = ["Account", "Amount", "Category", "Date", "Description"];

  dbRef = null;

  constructor() {
    this.dbRef = db.collection("transactions");
  }

  @action.bound
  addTransaction(...props) {}

  @action.bound
  getTransactions() {
    this.dbRef.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.transactions.push(doc.data());
      });
    });
  }
}

export default TransactionStore;
