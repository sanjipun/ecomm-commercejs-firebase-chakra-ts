import MainLayout from 'Layout/MainLayout';
import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from 'Views/LandingPage/Landing';
import ProductPage from 'Views/Products/ProductPage';

interface MainRouteProps { }

const MainRoute: React.FC<MainRouteProps> = () => {
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/products" component={ProductPage} />
            </Switch>
        </MainLayout>
    );
};

export default MainRoute;