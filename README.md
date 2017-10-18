# Book Store

### About

This application is created using React. [Create React App](https://github.com/facebookincubator/create-react-app) is used to generate starting files. [Firebase](https://firebase.google.com/) is used in order to keep the data about stores & books.
App starts with Store Picker, where user enters a randomly selected store.

After entering the store, there are three parts of UI:
* **Inventory** - User can load some books, add their own or delete them. 
* **Books** - In this part of UI, all data about books is being rendered. From here user can add books which are available to the order.
* **Your Order** - Here user can see all ordered books, remove them from order and also find out price of single & total order.


### Installation & Running

```
$ git clone https://github.com/jelenanesic/book-store.git
$ cd book-store
$ npm install
$ npm start
```
Server is running on port 3000.