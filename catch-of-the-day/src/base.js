import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: process.env.FIREBASE,
    authDomain: "catch-of-the-day-connie-cheng.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-connie-cheng.firebaseio.com",
});

export default base;
