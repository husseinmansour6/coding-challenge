import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from 'views/App';

// redux specific imports
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
// import configureStore from './store';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';
import ViewBreweryData from './components/viewBreweryData';

// If not using redux:
render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/viewBreweryData/:id" component={ViewBreweryData} />
    </BrowserRouter>,
    document.getElementById('app')
);

// It is not at all a requirement to use redux nor is it expected.
// However, if you want to use redux, here is a working setup:
// Create redux store with history
// const initialState = {};
// const history = createBrowserHistory();
// const store = configureStore(initialState, history);
//
// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <App />
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('app')
// );
