import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import i18next from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { constants } from '../constants/constants';
import { Dashboard } from './Dashboard';

const client = new ApolloClient({
    uri: constants.API_URL + '/graphql',
    cache: new InMemoryCache(),
});

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
                <ApolloProvider client={client}>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </HashRouter>
                </ApolloProvider>
            </MuiThemeProvider>
        </I18nextProvider>
        // </React.StrictMode>
    );
};
