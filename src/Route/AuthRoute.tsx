import React from 'react';
import { Route, Switch } from 'react-router';
import Login from 'Views/Auth/Login/Login';
import Register from 'Views/Auth/Register/Register';

interface AuthRouteProps { }

const AuthRoute: React.FC<AuthRouteProps> = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
        </Switch>
    );
};

export default AuthRoute;