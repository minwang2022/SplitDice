import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { getFriendships, addFriendship, receiveFriendship, receiveAllFriendships } from './actions/friendship_actions';
import { createBill, fetchBills } from './actions/bill_actions';
document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root');
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    // // store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // // window.createBill = createBill;
    window.fetchBills = fetchBills;
    
    ReactDOM.render(<Root store={store} />, root);
});

