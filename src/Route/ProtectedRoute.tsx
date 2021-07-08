import MainLayout from 'Layout/MainLayout';
import React from 'react';
import { Route, Switch } from 'react-router';
import CheckoutPage from 'Views/CheckoutPage/CheckoutPage';
import Profile from 'Views/Profile/Profile';
import RouteGuard from './RouteGuard';

interface ProtectedRouteProps { }

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
    console.log("Hello World")
    return (
        <MainLayout>
            <RouteGuard>
                <Switch>
                    <Route path="/dashboard/checkout" component={CheckoutPage} />
                    <Route path="/dashboard/profile" component={Profile} />
                </Switch>
            </RouteGuard>
        </MainLayout>
    );
};

export default ProtectedRoute;