import * as firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDB3B25DQAgkyJx6vLi3HhRjWN0ko4ZcEM",
  authDomain: "book-store-1acb6.firebaseapp.com",
  databaseURL: "https://book-store-1acb6.firebaseio.com"
});

const base = Rebase.createClass(app.database());

export default base;