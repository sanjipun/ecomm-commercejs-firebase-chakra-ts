import MainLayout from 'Layout/MainLayout';
import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from 'Views/LandingPage/Landing';
import ProductPage from 'Views/Products/ProductPage';
import CategoryPage from 'Views/CategoryPage/CategoryPage';

interface MainRouteProps { }

const MainRoute: React.FC<MainRouteProps> = () => {
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/products" component={ProductPage} />
                <Route exact path="/category" component={CategoryPage} />
            </Switch>
        </MainLayout>
    );
};

export default MainRoute;