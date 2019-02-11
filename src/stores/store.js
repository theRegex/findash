import { observable, action } from "mobx";
import firebase from "services/firebase";

class Store {
  @observable.shallow words = [];
  @observable db = firebase.firestore();
  @observable ref = this.db.collection("words");
  @observable word = "";

  @action.bound
  setWord(event) {
    this.word = event.target.value;
  }

  @action.bound
  addWord() {
    if(this.word === "") return;

    this.ref
      .doc()
      .set({ word: this.word })
      .then(docRef => {
        console.log("Doc ID: ", docRef);
      })
      .catch(err => console.log(err));
  }

  @action.bound
  getWords() {
    this.ref.onSnapshot(querySnapshot => {
      let temp = [];
      querySnapshot.forEach(doc => temp.push(doc.data()));
      this.words = temp;
    });
  }
}

export default new Store();
