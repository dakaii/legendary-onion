import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import i18next from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { PrivateRoute } from '../components/PrivateRoute';
import reducer from '../reducers/rootReducer';
import Sagas from '../sagas/Sagas';
import { Dashboard } from './Dashboard';
import { LogIn } from './LogIn';
import { OrganizationInfo } from './OrganizationInfo';
import { ResetPassword } from './ResetPassword';
import { SignUp } from './SignUp';

const isDevMode =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    isDevMode
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(Sagas);

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff',
        },
        primary: {
            main: '#07C',
        },
        secondary: {
            main: '#E33E7F',
        },
    },
});
export const App = () => {
    return (
        // <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <HashRouter>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Dashboard}
                            />
                            <Route
                                exact
                                path="/organization-info"
                                component={OrganizationInfo}
                            />
                        </Switch>
                    </HashRouter>
                </Provider>
            </MuiThemeProvider>
        </I18nextProvider>
        // </React.StrictMode>
    );
};
