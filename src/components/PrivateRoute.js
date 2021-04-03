import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (!token || jwtDecode(token).exp < Date.now() / 1000) {
            setIsAuthenticated(false);
        } else {
            setIsAuthenticated(true);
        }
    }, [auth]);

    if (isAuthenticated === null) {
        return <></>;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
